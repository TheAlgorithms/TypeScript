/**
 * @function isSortedArray
 * @description Checks if the array is sorted.
 * @param {number[]} arr - array to check if it is sorted
 * @returns {boolean} - true if the array is sorted and false if it's not sorted
 * @example isSortedArray([1,2,3]) => true
 * @example isSortedArray([9,2,3]) => false
 */
export function isSortedArray(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    }
  }
  return true
}
