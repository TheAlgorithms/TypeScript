/**
 * @function IsLeapYear
 * @description Checks if a year is a leap year (Gregorian calendar).
 * A year is a leap year if it is divisible by 4 but not by 400 or if it is divisible by 400.
 * @param {number} year - A year, natural number > 0.
 * @return {boolean} - True if given year is a leap year.
 * @see https://en.wikipedia.org/wiki/Leap_year#Gregorian_calendar
 * @example IsLeapYear(2000) = true
 * @example IsLeapYear(2001) = false
 */

export const IsLeapYear = (year: number): boolean => {
  if (year <= 0 || !Number.isInteger(year)) {
    throw new Error("year must be a natural number > 0");
  }

  if (year % 4 > 0) {
    return false;
  }

  if (year % 100 > 0) {
    return true;
  }

  if (year % 400 > 0) {
    return false;
  }

  return true;
};
