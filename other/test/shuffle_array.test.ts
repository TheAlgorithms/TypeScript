import { shuffleArray } from '../shuffle_array'

describe('shuffleArray', () => {
  test.each([{ arr: [1, 2, 3] }, { arr: [1, 2, 3, 6, 78, 2] }])(
    "The length of the array $arr does'nt change after shuffling the array",
    ({ arr }) => {
      const originalLength = arr.length
      shuffleArray(arr)
      expect(arr.length).toEqual(originalLength)
    }
  )

  test.each([{ arr: [1, 2, 3] }, { arr: [1, 2, 3, 6, 78, 2] }])(
    'The elements of the array $arr remain the same (possibly with different order) after shuffling the array',
    ({ arr }) => {
      const copyArray = Array.from(arr)
      shuffleArray(arr)
      expect(
        arr.every((elem) => {
          return copyArray.includes(elem)
        })
      ).toEqual(true)
    }
  )
})
