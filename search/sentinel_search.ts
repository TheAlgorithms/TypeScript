/**
 * @function sentinelSearch
 * @description Sentinel search algorithm for array.
 *
 * Sentinel linear search is a variation of the standard linear search algorithm used to
 * find a target value in an array or list. The basic idea behind this algorithm is to add a
 * sentinel value at the end of the array which is equal to the target value we are looking for.
 * This helps to avoid checking the array boundary condition during each iteration of the loop,
 * as the sentinel value acts as a stopper for the loop.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number | null} - index of the target number in the list, or null if not found
 * @see [SentinelSearch](https://www.geeksforgeeks.org/sentinel-linear-search/)
 * @example sentinelSearch([1,2,3], 2) => 1
 * @example sentinelSearch([4,5,6], 2) => null
 * @complexity_analysis
 * Time Complexity :
 * Worst Case -> The time complexity of the Sentinel Linear Search algorithm is O(n) in the worst case.
 * Best Case -> In the best case, when the key is found in the first iteration, the time complexity will be O(1).
 * Average Case -> However, the average time complexity is still O(n).
 * Auxiliary Space: O(1)
 */

export const sentinelSearch = (
  array: number[],
  target: number
): number | null => {
  const arrayLength = array.length
  if (arrayLength === 0) return null

  // Element to be searched is placed at the last index
  const last: number = array[arrayLength - 1]
  array[arrayLength - 1] = target

  let index: number = 0
  while (array[index] !== target) index += 1

  // Put the last element back
  array[arrayLength - 1] = last

  if (index < arrayLength - 1 || array[arrayLength - 1] === target) return index
  return null
}
