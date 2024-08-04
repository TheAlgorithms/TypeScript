import { binarySearchIterative, binarySearchRecursive } from '../binary_search'

describe('BinarySearch', () => {
  const testArray: number[] = [1, 2, 3, 4]
  type FunctionsArray = { (array: number[], index: number): number | null }[]
  const functions: FunctionsArray = [
    binarySearchIterative,
    binarySearchRecursive
  ]

  for (const func of functions) {
    it('should be defined', () => {
      expect(func(testArray, 2)).toBeDefined()
    })
    it('should return a number or null', () => {
      expect(
        typeof func(testArray, 2) === 'number' || func(testArray, 2) === null
      ).toBe(true)
    })
    it('should return null if the target is not found in the array', () => {
      expect(func(testArray, 5)).toBe(null)
    })
    it('should return null if there are no elements in the array', () => {
      expect(func([], 5)).toBe(null)
    })
    it('should return the index of the target if it is found in the array', () => {
      expect(func(testArray, 2)).toBe(1)
    })
    it('should return a correct index of target when the array contains duplicate values', () => {
      expect(func([1, 2, 2, 3, 3, 3, 4], 2)).toBe(1)
    })
    it('should return the first index when the target is the first item in the array', () => {
      expect(func(testArray, 1)).toBe(0)
    })
    it('should return the last index when the target is the last item in the array', () => {
      expect(func(testArray, 4)).toBe(3)
    })
  }
})
