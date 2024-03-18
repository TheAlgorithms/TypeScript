import { addBinary } from '../add_binary'

describe('Add Binary Number', () => {
  it('should add two binary numbers with no carry', () => {
    const result = addBinary('1101', '1011')
    expect(result).toBe('11000')
  })

  it('should add two binary numbers with carry', () => {
    const result = addBinary('1111', '1111')
    expect(result).toBe('11110')
  })

  it('should add two different-length binary numbers', () => {
    const result = addBinary('1101', '111')
    expect(result).toBe('10100')
  })

  it('should add two empty binary numbers', () => {
    const result = addBinary('', '')
    expect(result).toBe('')
  })

  it('should add one empty binary number to a non-empty number', () => {
    const result = addBinary('1010', '')
    expect(result).toBe('1010')
  })

  it('should add one non-empty binary number to an empty number', () => {
    const result = addBinary('', '1101')
    expect(result).toBe('1101')
  })
})
