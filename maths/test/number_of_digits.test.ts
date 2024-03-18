import { numberOfDigits } from '../number_of_digits'

describe('numberOfDigits', () => {
  test.each([-890, -5.56, -7, 0, 0.73, 4.2, NaN, -Infinity, Infinity])(
    'should throw an error for non natural number %d',
    (num) => {
      expect(() => numberOfDigits(num)).toThrowError(
        'only natural numbers are supported'
      )
    }
  )

  test.each([
    [1, 1],
    [18, 2],
    [549, 3],
    [7293, 4],
    [1234567890, 10]
  ])('of %i should be %i', (num, expected) => {
    expect(numberOfDigits(num)).toBe(expected)
  })
})
