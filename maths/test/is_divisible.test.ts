import { isDivisible } from '../is_divisible'

describe('isDivisible', () => {
  test.each([
    [1, 1],
    [6, 3],
    [101, 1],
    [5555, 5],
    [143, 13],
    [535, 107],
    [855144, 999],
    [100000, 10],
    [1.5, 0.5]
  ])('%f is divisible by %f', (num1, num2) => {
    expect(isDivisible(num1, num2)).toBe(true)
  })

  test.each([
    [1, 2],
    [61, 3],
    [120, 11],
    [5556, 5],
    [10, 9],
    [75623, 3],
    [45213, 11],
    [784, 24],
    [1.2, 0.35]
  ])('%f is not divisible by %f', (num1, num2) => {
    expect(isDivisible(num1, num2)).toBe(false)
  })

  test('should not divide by 0', () => {
    expect(() => isDivisible(10, 0)).toThrow()
  })
})
