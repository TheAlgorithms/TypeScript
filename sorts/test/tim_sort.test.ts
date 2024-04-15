import { timSort } from '../tim_sort'

describe('Tim Sort', () => {
  const compareAscending = (a: number, b: number) => a - b
  const compareDescending = (a: number, b: number) => b - a

  describe('Sorting in increasing order', () => {
    it('should return the sorted array for an already sorted array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      timSort(arr, compareAscending)
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it('should return the sorted array for a reverse-sorted array', () => {
      const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      timSort(arr, compareAscending)
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it('should return the sorted array for an average case', () => {
      const arr = [1, 4, 2, 5, 9, 6, 3, 8, 10, 7]
      timSort(arr, compareAscending)
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it('should return the sorted array for a best case', () => {
      const arr = [1, 4, 2, 9, 5, 7, 3, 8, 10, 6]
      timSort(arr, compareAscending)
      expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })

  describe('Sorting in decreasing order', () => {
    it('should return the sorted array for an already sorted array', () => {
      const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
      timSort(arr, compareDescending)
      expect(arr).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })

    it('should return the sorted array for a reverse-sorted array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      timSort(arr, compareDescending)
      expect(arr).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })

    it('should return the sorted array for an average case', () => {
      const arr = [1, 4, 2, 5, 9, 6, 3, 8, 10, 7]
      timSort(arr, compareDescending)
      expect(arr).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })

    it('should return the sorted array for a best case', () => {
      const arr = [1, 4, 2, 9, 5, 7, 3, 8, 10, 6]
      timSort(arr, compareDescending)
      expect(arr).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
  })
})
