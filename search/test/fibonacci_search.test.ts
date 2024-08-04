import { fibonacciSearch } from '../fibonacci_search'

describe('Fibonacci search', () => {
  test.each([
    [[1, 2, 3], 2, 1],
    [[4, 5, 6], 2, null],
    [[10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100], 85, 8],
    [[], 1, null],
    [[1], 1, 0],
    [[1, 3, 5, 7, 9, 11, 13], 11, 5],
    [[1, 3, 5, 7, 9, 11, 13], 8, null]
  ])(
    'of %o, searching for %o, expected %i',
    (array: number[], target: number, expected: number | null) => {
      expect(fibonacciSearch(array, target)).toBe(expected)
    }
  )
})
