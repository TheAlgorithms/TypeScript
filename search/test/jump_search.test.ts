import { jumpSearch } from '../jump_search'

describe('Jump search', () => {
  test.each([
    [[], 1, -1],
    [[1, 2, 3, 4, 5], 4, 3],
    [[1, 3, 5, 8, 9], 4, -1],
    [[1, 3, 5, 8], 8, 3],
    [[1, 3, 5, 8], 9, -1],
    [[1, 3, 5, 8], 7, -1],
    [[1, 3, 5, 8, 10], 10, 4],
    [[1, 3, 5, 8, 10], 11, -1],
    [[1, 3, 5, 8, 10], 9, -1],
    [[5], 5, 0],
    [[5], 100, -1],
    [[], 100, -1]
  ])(
    'of %o , searching for %o, expected %i',
    (array: any[], target: any, index: number) => {
      expect(jumpSearch(array, target)).toStrictEqual(index)
    }
  )
})
