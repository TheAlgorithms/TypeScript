/**
 * @function quickSort
 * @description is an algorithm based on divide and conquer approach in which an array is split into sub-arrays and these sub arrays are recursively sorted to get final array
 * @see [Quick Sort](https://www.javatpoint.com/quick-sort)
 * @example QuickSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const partition = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) => {
  const pivotIndex = choosePivot(left, right)
  const pivot = array[pivotIndex]
  ;[array[pivotIndex], array[right]] = [array[right], array[pivotIndex]]
  let i = left - 1
  let j = right

  while (i < j) {
    while (array[++i] < pivot);
    while (array[--j] > pivot);

    if (i < j) {
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  ;[array[right], array[i]] = [array[i], array[right]]
  return i
}

/**
 * @function choosePivot
 * @description Chooses a pivot element randomly within the subarray.
 * @param {number} left - The left index of the subarray.
 * @param {number} right - The right index of the subarray.
 * @returns {number} - The index of the chosen pivot element.
 */
const choosePivot = (left: number, right: number): number => {
  return Math.floor(Math.random() * (right - left + 1)) + left
}

/**
 * Quicksort implementation
 *
 * @param {number[]} array
 * @param {number} [left=0]
 * @param {number} [right=array.length - 1]
 * @returns {number[]}
 * @complexity_analysis
 * Space complexity - O(nlogn)
 * Time complexity
 *      Best case   -   O(nlogn)
 *                      When pivot element lies in the middle of the list
 *      Worst case  -   O(n^2)
 *                      When pivot element lies on the extreme ends
 *      Average case -  O(nlogn)
 *                      When the above two cases are not met
 */

export const QuickSort = (
  array: number[],
  left: number = 0,
  right: number = array.length - 1
) => {
  if (array.length > 1) {
    const index = partition(array, left, right)

    if (left < index - 1) {
      QuickSort(array, left, index - 1)
    }

    if (index + 1 < right) {
      QuickSort(array, index + 1, right)
    }
  }

  return array
}
