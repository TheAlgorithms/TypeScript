import { partition } from './quick_sort'
/**
 * @function QuickSelect
 * @description is an algorithm based on the QuickSort approach that selects the kth smallest element from an array
 * @param {number[]} array - The array from which to select the element
 * @param {number} k - The index representing the kth smallest element to find
 * @param {number} left - The left boundary of the array or subarray to consider (default: 0)
 * @param {number} right - The right boundary of the array or subarray to consider (default: array.length - 1)
 * @returns {number} - The kth smallest element from the array
 * @throws {Error} - If k is out of bounds (less than 0 or greater than or equal to array.length)
 */

export const QuickSelect = (
  array: number[],
  k: number,
  left: number = 0,
  right: number = array.length - 1
): number => {
  if (k < 0 || k >= array.length) {
    throw new Error('k is out of bounds')
  }
  if (left === right) {
    // If the list contains only one element, return that element
    return array[left]
  }

  // Partition the array
  const pivotIndex = partition(array, left, right)

  // The pivot is in its final sorted position
  if (k === pivotIndex) {
    return array[k]
  } else if (k < pivotIndex) {
    // If k is less than the pivot index, look left
    return QuickSelect(array, k, left, pivotIndex - 1)
  } else {
    // If k is greater than the pivot index, look right
    return QuickSelect(array, k, pivotIndex + 1, right)
  }
}
