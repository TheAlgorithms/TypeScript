/**
 * @function binarySearch
 * @description binary search algorithm (iterative & recursive implementations) for a sorted array.
 *
 * The algorithm searches for a specific value in a sorted array in logarithmic time.
 * It repeatedly halves the portion of the list that could contain the item,
 * until you've narrowed down the possible indices to just one.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or null if not found
 * @see [BinarySearch](https://www.geeksforgeeks.org/binary-search/)
 * @example binarySearch([1,2,3], 2) => 1
 * @example binarySearch([4,5,6], 2) => null
 */

export const binarySearchIterative = (
  array: number[],
  target: number,
  start: number = 0,
  end: number = array.length - 1
): number | null => {
  if (array.length === 0) return null

  // ensure the target is within the bounds of the array
  if (target < array[start] || target > array[end]) return null

  // declare pointers for the middle index
  let middle = (start + end) >> 1

  while (array[middle] !== target && start <= end) {
    // if the target is less than the middle value, move the end pointer to be middle -1 to narrow the search space
    // otherwise, move the start pointer to be middle + 1
    if (target < array[middle]) end = middle - 1
    else start = middle + 1
    // redeclare the middle index when the search window changes
    middle = (start + end) >> 1
  }
  // return the middle index if it is equal to target
  return array[middle] === target ? middle : null
}

export const binarySearchRecursive = (
  array: number[],
  target: number,
  start = 0,
  end = array.length - 1
): number | null => {
  if (array.length === 0) return null

  // ensure the target is within the bounds of the array
  if (target < array[start] || target > array[end]) return null

  const middle = (start + end) >> 1

  if (array[middle] === target) return middle // target found
  if (start > end) return null // target not found

  // if the target is less than the middle value, move the end pointer to be middle -1 to narrow the search space
  // otherwise, move the start pointer to be middle + 1
  return target < array[middle]
    ? binarySearchRecursive(array, target, start, middle - 1)
    : binarySearchRecursive(array, target, middle + 1, end)
}
