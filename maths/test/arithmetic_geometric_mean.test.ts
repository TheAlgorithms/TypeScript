import {
  calculateArithmeticMean,
  calculateGeometricMean
} from '../arithmetic_geometric_mean'

describe('Arithmetic Mean', () => {
  test('Should return the arithmetic mean of list of numbers', () => {
    expect(calculateArithmeticMean([1, 2, 3, 4])).toBe(2.5)
  })

  test('Should throw a TypeError if the input is not an array', () => {
    expect(() => calculateArithmeticMean(1 as unknown as number[])).toThrow(
      TypeError
    )
  })

  test('Should throw a RangeError if the input array is empty', () => {
    expect(() => calculateArithmeticMean([])).toThrow(RangeError)
  })
})

describe('Geometric Mean', () => {
  test('Should return geometric mean of list of numbers', () => {
    expect(calculateGeometricMean([1, 2, 3, 4])).toBe(2.2133638394006434)
  })

  test('Should throw a TypeError if the input is not an array', () => {
    expect(() => calculateGeometricMean(1 as unknown as number[])).toThrow(
      TypeError
    )
  })

  test('Shoud throw a RangeError if the input array is empty', () => {
    expect(() => calculateGeometricMean([])).toThrow(RangeError)
  })
})
