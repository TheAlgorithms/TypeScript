import { binarySearchIterative } from './binary_search'

/**
 * @description Exponential search algorithm for a sorted array.
 *
 * The algorithm searches for a specific value in a sorted array by first finding a range
 * where the value may be present and then performing a binary search within that range.
 *
 * Compared with binary search, exponential search can be more convenient and advantageous
 * in cases where the element to be searched is closer to the beginning of the array,
 * thus avoiding several comparisons that would make the search more verbose.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number | null} - index of the target number in the list, or null if not found
 * @see [ExponentialSearch](https://www.geeksforgeeks.org/exponential-search/)
 * @example exponentialSearch([1, 2, 3, 4, 5], 3) => 2
 * @example exponentialSearch([10, 20, 30, 40, 50], 35) => null
 */

export const exponentialSearch = (
  array: number[],
  target: number
): number | null => {
  const arrayLength = array.length
  if (arrayLength === 0) return null

  if (array[0] === target) return 0

  let i = 1
  while (i < arrayLength && array[i] <= target) {
    i *= 2
  }

  const start = Math.floor(i / 2)
  const end = Math.min(i, arrayLength - 1)
  const result = binarySearchIterative(array, target, start, end)

  return result
}
