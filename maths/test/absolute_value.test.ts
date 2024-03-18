import { absoluteValue } from '../absolute_value'

describe('absoluteValue', () => {
  it('should return the absolute value of zero', () => {
    const absoluteValueOfZero = absoluteValue(0)
    expect(absoluteValueOfZero).toBe(0)
  })

  it('should return the absolute value of a negative integer', () => {
    const absoluteValueOfNegativeInteger = absoluteValue(-34)
    expect(absoluteValueOfNegativeInteger).toBe(34)
  })

  it('should return the absolute value of a positive integer', () => {
    const absoluteValueOfPositiveInteger = absoluteValue(50)
    expect(absoluteValueOfPositiveInteger).toBe(50)
  })

  it('should return the absolute value of a positive floating number', () => {
    const absoluteValueOfPositiveFloating = absoluteValue(20.2034)
    expect(absoluteValueOfPositiveFloating).toBe(20.2034)
  })

  it('should return the absolute value of a negative floating number', () => {
    const absoluteValueOfNegativeFloating = absoluteValue(-20.2034)
    expect(absoluteValueOfNegativeFloating).toBe(20.2034)
  })
})
