import { binaryExponentiationIterative } from '../binary_exponentiation_iterative'

describe('binaryExponentiationIterative', () => {
  test('should throw a TypeError when base is not a number', () => {
    expect(() =>
      binaryExponentiationIterative('2' as unknown as number, 10)
    ).toThrow(TypeError)
  })

  test('should throw a TypeError when exponent is not a positive integer', () => {
    expect(() => binaryExponentiationIterative(2, -10)).toThrow(TypeError)
  })

  test('should return the result of the base number raised to the power of the exponent number', () => {
    expect(binaryExponentiationIterative(2, 10)).toBe(1024)
    expect(binaryExponentiationIterative(2, 0)).toBe(1)
    expect(binaryExponentiationIterative(2, 1)).toBe(2)
    expect(binaryExponentiationIterative(0, 10)).toBe(0)
    expect(binaryExponentiationIterative(1, 10)).toBe(1)
  })
})
