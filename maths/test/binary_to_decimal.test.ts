import { binaryToDecimal } from '../binary_to_decimal'

describe('binaryToDecimal', () => {
  it('should return the correct value', () => {
    expect(binaryToDecimal('100')).toBe(4)
  })

  it('should return the correct value', () => {
    expect(binaryToDecimal('1100')).toBe(12)
  })

  it('should return the correct value of the sum from two numbers', () => {
    expect(binaryToDecimal('1110')).toBe(12 + 2)
  })

  it('should return the correct value of the subtract from two numbers', () => {
    expect(binaryToDecimal('10111101')).toBe(245 - 56)
  })

  it('should return the correct value', () => {
    expect(binaryToDecimal('11111110')).toBe(254)
  })

  it('should return the correct value', () => {
    expect(binaryToDecimal('1111011111111011')).toBe(63483)
  })
})
