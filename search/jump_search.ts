/**
 * @function jumpSearch
 * @description Jump search algorithm for a sorted array.
 *
 * Jump search is a searching algorithm for sorted arrays that checks elements
 * by jumping ahead by fixed steps. The optimal step size is the square root of the array length.
 *
 * The algorithm works as follows:
 * 1.Start from the first element and jump by step size until finding an element that is greater than or equal to the target value.
 * 2.Go back one step and perform a linear search from there until finding the target value or reaching the end of the subarray.
 * 3.If the target value is found, return its index. Otherwise, return -1 to indicate that it is not in the array.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or -1 if not found
 * @see [JumpSearch](https://www.geeksforgeeks.org/jump-search/)
 * @example jumpSearch([1,2,3], 2) => 1
 * @example jumpSearch([4,5,6], 2) => -1
 */

export const jumpSearch = (array: number[], target: number): number => {
  if (array.length === 0) return -1

  // declare pointers for the current and next indexes and step size
  const stepSize: number = Math.floor(Math.sqrt(array.length))
  let currentIdx: number = 0,
    nextIdx: number = stepSize

  while (array[nextIdx - 1] < target) {
    currentIdx = nextIdx
    nextIdx += stepSize

    if (nextIdx > array.length) {
      nextIdx = array.length
      break
    }
  }

  for (let index = currentIdx; index < nextIdx; index++) {
    if (array[index] == target) {
      return index
    }
  }

  return -1
}
