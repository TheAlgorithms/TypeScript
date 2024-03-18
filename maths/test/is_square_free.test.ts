import { isSquareFree } from '../is_square_free'

describe('isSquareFree', () => {
  test.each([1, 2, 3, 5, 7, 10, 26, 2 * 3, 3 * 5 * 7, 11 * 13 * 17 * 19])(
    '%i is square free',
    (input) => {
      expect(isSquareFree(input)).toBe(true)
    }
  )
  test.each([
    20,
    48,
    2 * 7 * 7,
    2 * 3 * 3,
    5 * 5 * 7,
    2 * 3 * 13 * 13 * 17,
    4 * 4 * 4,
    2 * 2,
    3 * 3,
    5 * 5,
    100,
    0
  ])('%i is not square free', (input) => {
    expect(isSquareFree(input)).toBe(false)
  })
})
