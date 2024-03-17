import { interpolationSearch } from '../interpolation_search'

describe('Interpolation search', () => {
  test.each([
    [[1, 3, 5, 7, 9, 11], 1, 0],
    [
      [
        1, 3, 7, 10, 14, 15, 16, 18, 20, 21, 22, 23, 25, 33, 35, 42, 45, 47, 50,
        52
      ],
      33,
      13
    ],
    [[0, 45, 67, 70, 89, 129, 150, 308], 308, 7],
    [[0, 45, 67, 70, 89, 129, 150, 308], 190, -1]
  ])(
    'of %o, searching for %o, expected %i',
    (array: any[], target: any, index: number) => {
      expect(interpolationSearch(array, target)).toStrictEqual(index)
    }
  )
})
