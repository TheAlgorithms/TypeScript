import { abs } from '../Abs'

describe('Testing abs function', () => {
  

  it('should return an absolute value of a negative number', () => {
    const absOfNegativeNumber = abs(-34)
    expect(absOfNegativeNumber).toBe(34)
  })

  it('should return an absolute value of a positive number', () => {
    const absOfPositiveNumber = abs(50)
    expect(absOfPositiveNumber).toBe(50)
  })

  it('should return an absolute value of a zero number', () => {
    const absOfPositiveNumber = abs(0)
    expect(absOfPositiveNumber).toBe(0)
  })

  it('should return an absolute value of any floating number', () => {
    const absOfPositiveNumber = abs(-20.2034)
    expect(absOfPositiveNumber).toBe(20.2034)
  })
})
