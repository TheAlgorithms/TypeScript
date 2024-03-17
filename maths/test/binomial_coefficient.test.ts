import { binomialCoefficient } from '../binomial_coefficient'

describe('binomialCoefficient', () => {
  it('should calculate the correct binomial coefficient', () => {
    // Test cases with expected results
    const testCases: [number, number, number][] = [
      [5, 2, 10],
      [10, 3, 120],
      [6, 0, 1],
      [4, 4, 1],
      [7, 5, 21],
      [10, 10, 1]
    ]

    // Iterate through each test case and verify the result
    testCases.forEach(([n, k, expected]) => {
      const result = binomialCoefficient(n, k)
      expect(result).toEqual(expected)
    })
  })

  it('should return 0 if k is larger than n or negative', () => {
    const invalidCases: [number, number][] = [
      [5, 6], // k is larger than n
      [10, -3], // k is negative
      [5, 10] // k is larger than n
    ]

    invalidCases.forEach(([n, k]) => {
      const result = binomialCoefficient(n, k)
      expect(result).toEqual(0)
    })
  })
})
