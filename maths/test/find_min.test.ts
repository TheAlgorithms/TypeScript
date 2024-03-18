import { findMin } from '../find_min'

describe('findMin', () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], 1],
    [[87, 6, 13, 999], 6],
    [[0.8, 0.2, 0.3, 0.5], 0.2],
    [[1, 0.1, -1], -1]
  ])('of this array should be %i', (nums, expected) => {
    expect(findMin(nums)).toBe(expected)
  })

  test('of arrays with length 0 should error', () => {
    expect(() => findMin([])).toThrowError(
      'array must have length of 1 or greater'
    )
  })
})
