import { fibonacci } from '../fibonacci_number'

describe('Testing FibonacciNumber', () => {

  it.each([
    [0, 0],
    [1, 1],
    [10, 55],
    [25, 75025],
  ])('fibonacci of %i is %i', (value,expected) => {
    expect(fibonacci(value)).toBe(expected)
  })
})