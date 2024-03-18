export enum Calendar {
  Gregorian,
  Julian
}

/**
 * @function getWeekday
 * @description Calculate the day of the week for any Julian or Gregorian calendar date.
 * @param {number} year - Year with century.
 * @param {number} month - Month of the year (1-12).
 * @param {number} day - Day of the month (1-31).
 * @return {number} Day of the week, where 0 represents Sunday.
 * @see https://en.wikipedia.org/wiki/Zeller's_congruence
 * @example getWeekday(2000, 1, 1) = 6
 * @example getWeekday(1500, 1, 1, Calendar.Julian) = 3
 */
export const getWeekday = (
  year: number,
  month: number,
  day: number,
  calendar: Calendar = Calendar.Gregorian
): number => {
  // Input validation
  if (!Number.isInteger(year) || year < 1) {
    throw new Error('Year must be an integer greater than 0')
  }

  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error('Month must be an integer between 1 and 12')
  }

  if (!Number.isInteger(day) || day < 1 || day > 31) {
    throw new Error('Day must be an integer between 1 and 31')
  }

  // Move January and February to the end of the previous year
  if (month < 3) {
    month += 12
    year--
  }

  const century = Math.floor(year / 100)
  year %= 100

  let weekday: number | undefined = undefined
  if (calendar === Calendar.Gregorian) {
    weekday =
      (day +
        Math.floor(2.6 * (month + 1)) +
        year +
        Math.floor(year / 4) +
        Math.floor(century / 4) +
        5 * century) %
      7
  } else {
    weekday =
      (day +
        Math.floor(2.6 * (month + 1)) +
        year +
        Math.floor(year / 4) +
        5 +
        6 * century) %
      7
  }

  // Convert to Sunday being 0
  return (weekday + 6) % 7
}
