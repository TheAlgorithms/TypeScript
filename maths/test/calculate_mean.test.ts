import { calculateMean } from '../calculate_mean'

describe('Tests for AverageMean', () => {
  it('should be a function', () => {
    expect(typeof calculateMean).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => calculateMean([])).toThrow()
  })

  it('should return the mean of an array of consecutive numbers', () => {
    const meanFunction = calculateMean([1, 2, 3, 4])
    expect(meanFunction).toBe(2.5)
  })

  it('should return the mean of an array of numbers', () => {
    const meanFunction = calculateMean([10, 40, 100, 20])
    expect(meanFunction).toBe(42.5)
  })

  it('should return the mean of an array of decimal numbers', () => {
    const meanFunction = calculateMean([1.3, 12.67, 99.14, 20])
    expect(meanFunction).toBe(33.2775)
  })

  it('should return the mean of an array of numbers, including negatives', () => {
    const meanFunction = calculateMean([10, -40, 100, -20])
    expect(meanFunction).toBe(12.5)
  })
})
