import { isLeapYear } from '../is_leap_year'

describe('isLeapYear', () => {
  test.each([4, 8, 12, 2004])(
    'a year is a leap year it is divisible by 4 but not by 400 like %i',
    (year) => {
      expect(year % 4 === 0).toBe(true)
      expect(year % 400 === 0).toBe(false)
      expect(isLeapYear(year)).toBe(true)
    }
  )

  test.each([400, 800, 1200, 1600, 2000, 2400, 40000])(
    'a year is a leap year it is divisible by 400 like %i',
    (year) => {
      expect(year % 400 === 0).toBe(true)
      expect(isLeapYear(year)).toBe(true)
    }
  )

  test.each([1, 313, 1997, 2001, 2021, 13337])(
    'a year is not a leap year if it is not divisible by 4 like %i',
    (year) => {
      expect(year % 4 === 0).toBe(false)
      expect(isLeapYear(year)).toBe(false)
    }
  )

  test.each([100, 200, 300, 700, 2100])(
    'a year is not a leap year if it is divisible by 100 but not by 400 like %i',
    (year) => {
      expect(year % 100 === 0).toBe(true)
      expect(year % 400 === 0).toBe(false)
      expect(isLeapYear(year)).toBe(false)
    }
  )

  test.each([1, 2022, 3000000])(
    'a year is supported if it is a natural number > 0 like %i',
    (year) => {
      expect(year > 0).toBe(true)
      expect(Number.isInteger(year)).toBe(true)
      expect(() => isLeapYear(year)).not.toThrow()
    }
  )

  test.each([-1, -10, -Infinity])(
    'a year is not supported if it is negative like %i',
    (year) => {
      expect(year < 0).toBe(true)
      expect(() => isLeapYear(year)).toThrow(
        'year must be a natural number > 0'
      )
    }
  )

  test.each([0.1, 1.2, 4.2])(
    'a year is not supported if it is not an integer %d',
    (year) => {
      expect(Number.isInteger(year)).toBe(false)
      expect(() => isLeapYear(year)).toThrow(
        'year must be a natural number > 0'
      )
    }
  )

  test('a year is not supported if it is 0', () => {
    expect(() => isLeapYear(0)).toThrow('year must be a natural number > 0')
  })
})
