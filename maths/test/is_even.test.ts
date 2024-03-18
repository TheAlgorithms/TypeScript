import { isEven } from '../is_even'

describe('isEven', () => {
  test.each([
    [2, true],
    [1, false],
    [0, true],
    [-1, false],
    [-2, true]
  ])('correct output for for %i', (nums, expected) => {
    expect(isEven(nums)).toBe(expected)
  })

  test('only whole numbers should be accepted', () => {
    expect(() => isEven(0.5)).toThrowError('only integers can be even or odd')
  })
})
