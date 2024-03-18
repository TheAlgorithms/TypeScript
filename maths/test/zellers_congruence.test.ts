import { Calendar, getWeekday } from '../zellers_congruence'

describe("Zeller's congruence", () => {
  test.each([
    { year: 2000, month: 1, day: 1, expected: 6 },
    { year: 2000, month: 2, day: 1, expected: 2 },
    { year: 2000, month: 3, day: 1, expected: 3 },
    { year: 2000, month: 4, day: 1, expected: 6 },
    { year: 2000, month: 5, day: 1, expected: 1 },
    { year: 2000, month: 6, day: 1, expected: 4 },
    { year: 2000, month: 7, day: 1, expected: 6 },
    { year: 2000, month: 8, day: 1, expected: 2 },
    { year: 2000, month: 9, day: 1, expected: 5 },
    { year: 2000, month: 10, day: 1, expected: 0 },
    { year: 2000, month: 11, day: 1, expected: 3 },
    { year: 2000, month: 12, day: 1, expected: 5 },
    { year: 1, month: 1, day: 1, expected: 1 },
    { year: 23, month: 2, day: 28, expected: 2 },
    { year: 456, month: 3, day: 31, expected: 5 },
    { year: 1850, month: 4, day: 1, expected: 1 },
    { year: 2100, month: 12, day: 31, expected: 5 },
    { year: 3000, month: 12, day: 31, expected: 3 }
  ])(
    `The weekday of $year-$month-$day in the default calendar is $expected`,
    ({ year, month, day, expected }) => {
      expect(getWeekday(year, month, day)).toEqual(expected)
    }
  )

  test.each([
    { year: 1500, month: 1, day: 1, expected: 3 },
    { year: 1500, month: 2, day: 1, expected: 6 },
    { year: 1500, month: 3, day: 1, expected: 0 },
    { year: 1500, month: 4, day: 1, expected: 3 },
    { year: 1500, month: 5, day: 1, expected: 5 },
    { year: 1500, month: 6, day: 1, expected: 1 },
    { year: 1500, month: 7, day: 1, expected: 3 },
    { year: 1500, month: 8, day: 1, expected: 6 },
    { year: 1500, month: 9, day: 1, expected: 2 },
    { year: 1500, month: 10, day: 1, expected: 4 },
    { year: 1500, month: 11, day: 1, expected: 0 },
    { year: 1500, month: 12, day: 1, expected: 2 },
    { year: 1, month: 1, day: 1, expected: 6 },
    { year: 23, month: 2, day: 28, expected: 0 },
    { year: 456, month: 3, day: 31, expected: 6 },
    { year: 1582, month: 2, day: 1, expected: 4 }
  ])(
    `The weekday of $year-$month-$day in the Julian calendar is $expected`,
    ({ year, month, day, expected }) => {
      expect(getWeekday(year, month, day, Calendar.Julian)).toEqual(expected)
    }
  )

  test(`The default calendar is Gregorian`, () => {
    expect(getWeekday(1, 1, 1)).toEqual(1)
  })

  test.each([
    { year: 1, month: 1, day: 1, expected: 1 },
    { year: 23, month: 2, day: 28, expected: 2 },
    { year: 456, month: 3, day: 31, expected: 5 },
    { year: 1850, month: 4, day: 1, expected: 1 },
    { year: 2000, month: 1, day: 1, expected: 6 },
    { year: 2100, month: 12, day: 31, expected: 5 },
    { year: 3000, month: 12, day: 31, expected: 3 }
  ])(
    `The weekday for $year-$month-$day in the default calendar matches getUTCDay`,
    ({ year, month, day }) => {
      // Convert to a string to avoid Date constructor mapping 1 to year 1901
      const dateString = `${year.toString().padStart(4, '0')}-${month
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`
      expect(getWeekday(year, month, day)).toEqual(
        new Date(dateString).getUTCDay()
      )
    }
  )

  test.each([
    { year: 0, month: 1, day: 1 },
    { year: -5, month: 1, day: 1 },
    { year: 12.2, month: 1, day: 1 }
  ])(`Should throw an error for invalid year $year`, ({ year, month, day }) => {
    expect(() => getWeekday(year, month, day)).toThrow(
      'Year must be an integer greater than 0'
    )
  })

  test.each([
    { year: 2001, month: -5, day: 1 },
    { year: 2001, month: 0, day: 1 },
    { year: 2001, month: 13, day: 1 },
    { year: 2001, month: 9.3, day: 1 }
  ])(
    `Should throw an error for invalid month $month`,
    ({ year, month, day }) => {
      expect(() => getWeekday(year, month, day)).toThrow(
        'Month must be an integer between 1 and 12'
      )
    }
  )

  test.each([
    { year: 2001, month: 1, day: -5 },
    { year: 2001, month: 1, day: 0 },
    { year: 2001, month: 1, day: 32 }
  ])(`Should throw an error for invalid day $day`, ({ year, month, day }) => {
    expect(() => getWeekday(year, month, day)).toThrow(
      'Day must be an integer between 1 and 31'
    )
  })
})
