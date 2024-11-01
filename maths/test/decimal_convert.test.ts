import { decimalConvert } from '../decimal_convert'

describe('decimalConvert', () => {
  it('should convert "1100" to 12', () => {
    expect(decimalConvert('1100')).toBe(12)
  })

  it('should convert "1110" to 14', () => {
    expect(decimalConvert('1110')).toBe(14)
  })

  it('should convert "0" to 0', () => {
    expect(decimalConvert('0')).toBe(0)
  })

  it('should convert "1" to 1', () => {
    expect(decimalConvert('1')).toBe(1)
  })

  it('should convert "101" to 5', () => {
    expect(decimalConvert('101')).toBe(5)
  })

  it('should handle an empty string by returning 0', () => {
    expect(decimalConvert('')).toBe(0)
  })

  it('should convert a binary string with leading zeros "0001" to 1', () => {
    expect(decimalConvert('0001')).toBe(1)
  })
})
