import { findFactors } from '../factors'

describe('findFactors', () => {
  test.each([-890, -5.56, -7, 0, 0.73, 4.2, NaN, -Infinity, Infinity])(
    'should throw an error for non natural number %d',
    (num) => {
      expect(() => findFactors(num)).toThrowError(
        'Only natural numbers are supported.'
      )
    }
  )

  test.each([
    [1, new Set([1])],
    [2, new Set([1, 2])],
    [4, new Set([1, 2, 4])],
    [6, new Set([1, 2, 3, 6])],
    [16, new Set([1, 2, 4, 8, 16])]
  ])('of %i should return the correct set of its factors', (num, expected) => {
    expect(findFactors(num)).toStrictEqual(expected)
  })
})
