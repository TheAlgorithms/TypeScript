import { binaryConvert } from '../binary_convert'

describe('binaryConvert', () => {
  it('should return the correct value', () => {
    expect(binaryConvert(4)).toBe('100')
  })
  it('should return the correct value', () => {
    expect(binaryConvert(12)).toBe('1100')
  })
  it('should return the correct value of the sum from two number', () => {
    expect(binaryConvert(12 + 2)).toBe('1110')
  })
  it('should return the correct value of the subtract from two number', () => {
    expect(binaryConvert(245 - 56)).toBe('10111101')
  })
  it('should return the correct value', () => {
    expect(binaryConvert(254)).toBe('11111110')
  })
  it('should return the correct value', () => {
    expect(binaryConvert(63483)).toBe('1111011111111011')
  })
})
