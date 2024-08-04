import { exponentialSearch } from '../exponential_search'

describe('Exponential search', () => {
  test.each([
    [[1, 2, 3, 4, 5], 3, 2],
    [[10, 20, 30, 40, 50], 35, null],
    [[10, 20, 30, 40, 50], 10, 0],
    [[10, 20, 30, 40, 50], 50, 4],
    [[10, 20, 30, 40, 50], 60, null],
    [[], 10, null],
    [[1, 2, 3, 4, 5], 1, 0],
    [[1, 2, 3, 4, 5], 5, 4]
  ])(
    'of %o, searching for %o, expected %i',
    (array: number[], target: number, expected: number | null) => {
      expect(exponentialSearch(array, target)).toBe(expected)
    }
  )
})
