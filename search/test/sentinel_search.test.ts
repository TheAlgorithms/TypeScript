import { sentinelSearch } from '../sentinel_search'

describe('Sentinel search', () => {
  test.each([
    [['o', 'b', 'c'], 'c', 2],
    [[1, 2, 3, 4, 5], 4, 3],
    [['s', 't', 'r', 'i', 'n', 'g'], 'a', null],
    [['1', '2', '3'], '1', 0],
    [['4', 'e', '6', '10'], 4, null]
  ])(
    'of %o , searching for %o, expected %i',
    (array: any[], target: any, index: number | null) => {
      expect(sentinelSearch(array, target)).toStrictEqual(index)
    }
  )
})
