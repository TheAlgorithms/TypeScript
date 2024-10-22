import { binaryExponent } from '../binary_exponentiation'

describe('Tests for HexArea', () => {
  it('should be a function', () => {
    expect(typeof binaryExponent).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => binaryExponent([])).toThrow()
  })

  it('should throw error for invalid input', () => {
    expect(() => binaryExponent([-1, 1])).toThrow()
  })

  it('should throw error for invalid input', () => {
    expect(() => binaryExponent([0])).toThrow()
  })

  it('should return A^B', () => {
    const binaryExponentFunction = binaryExponent([1, 0])
    expect(binaryExponentFunction).toBe(1)
  })

  it('should return A^B', () => {
    const binaryExponentFunction = binaryExponent([10, 18])
    expect(binaryExponentFunction).toBe(1000000000000000000)
  })
})