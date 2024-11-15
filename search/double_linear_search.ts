/**
 * @function doubleLinearSearch
 * @description double linear search is an improvement of linear
 * search in that it iterates through the array from both
 * sides, it runs in O(0.5n) which is technically O(n)
 * @param {any} target - target element to look for
 * @param {any[]} array - an array of elements
 * @return {boolean} - return true if the number is found, false if not
 * @see https://abc-algorithms.vercel.app/algorithm/double-linear-search
 * @example doubleLinearSearch(12, [32, 19, 2, 64, 12]) => true
 */

export const doubleLinearSearch = (target: any, array: any[]): boolean => {
  if (array.length === 0) return false
  if (!target) return false

  let left: number = 0
  let right: number = array.length - 1

  while (left <= right) {
    if (array[left] === target) return true
    if (array[right] === target) return true

    left += 1
    right -= 1
  }
  return false
}
