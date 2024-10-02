import { geometricMean } from '../geometric_mean'

describe('Tests for GeometricMean', () => {
  it('should be a function', () => {
    expect(typeof geometricMean).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => geometricMean([])).toThrow()
  })

  it('should throw error for invalid input (negative numbers)', () => {
    expect(() => geometricMean([1, -3, 4, -7])).toThrow()
  })

  it('should return 0 if 0 is in array', () => {
    const meanFunction = geometricMean([4, 8, 16, -3, 0])
    expect(meanFunction).toBe(0)
  })

  it('should return the geometric mean of an array of numbers', () => {
    const meanFunction = geometricMean([4, 8, 16])
    expect(meanFunction).toBe(8)
  })

  it('should return the geometric mean of an array of decimal numbers', () => {
    const meanFunction = geometricMean([1.2, 3.4, 5])
    expect(meanFunction).toBe(2.7323944160944684)
  })
})