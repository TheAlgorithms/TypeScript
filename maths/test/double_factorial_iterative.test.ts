import { DoubleFactorialIterative } from '../double_factorial_iterative'

describe('Double Factorial', () => {
  test.each([
    [4, 8],
    [5, 15],
    [10, 3840]
  ])('%i!! = %i', (n, expected) => {
    expect(DoubleFactorialIterative(n)).toBe(expected)
  })
})
