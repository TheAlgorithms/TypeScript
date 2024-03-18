import { binaryGCF, greatestCommonFactor } from '../greatest_common_factor'

describe('binaryGCF', () => {
  test.each([
    [12, 8, 4],
    [1, 199, 1],
    [88, 40, 8],
    [288, 160, 32]
  ])('of given two numbers is correct', (numa, numb, expected) => {
    expect(binaryGCF(numa, numb)).toBe(expected)
  })

  test('only whole numbers should be accepted', () => {
    expect(() => binaryGCF(0.5, 0.8)).toThrowError(
      'numbers must be natural to determine factors'
    )
  })

  test('only positive numbers should be accepted', () => {
    expect(() => binaryGCF(-2, 4)).toThrowError(
      'numbers must be natural to determine factors'
    )
  })
})

describe('greatestCommonFactor', () => {
  test.each([
    [[7], 7],
    [[12, 8], 4],
    [[1, 199], 1],
    [[88, 40, 32], 8],
    [[288, 160, 64], 32]
  ])('of given list is correct', (nums, expected) => {
    expect(greatestCommonFactor(nums)).toBe(expected)
  })

  test('the list should consist of at least one number', () => {
    expect(() => greatestCommonFactor([])).toThrowError(
      'at least one number must be passed in'
    )
  })
})
