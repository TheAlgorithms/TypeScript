/**
 * @function ternarySearch
 * @description Ternary search is a divide-and-conquer search algorithm similar to binary search.
 * It divides the search space into three parts instead of two. It's useful for searching in sorted arrays,
 * especially for searching peaks in mountains or similar structures. It can also be used as an alternative to binary search.
 * @Complexity_Analysis
 * Space complexity - O(log₃ n)  (recursion depth)
 * Time complexity
 *      Best case   -   O(1)
 *                      When the element is at one of the dividing points
 *      Worst case  -   O(log₃ n)
 *                      When we need to go through the entire search tree
 *      Average case -  O(log₃ n)
 *
 * @param {number[]} arr - The sorted input array
 * @param {number} target - The target value to search
 * @return {number} - The index of the target if found, otherwise -1
 * @see [Ternary Search](https://en.wikipedia.org/wiki/Ternary_search)
 * @example ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5) = 4
 */

export function ternarySearch(arr: number[], target: number): number {
  return ternarySearchHelper(arr, target, 0, arr.length - 1);
}

function ternarySearchHelper(
  arr: number[],
  target: number,
  left: number,
  right: number,
): number {
  if (left > right) {
    return -1;
  }

  // Divide the array into 3 parts
  const mid1 = Math.floor(left + (right - left) / 3);
  const mid2 = Math.floor(right - (right - left) / 3);

  // Check if target is at mid1
  if (arr[mid1] === target) {
    return mid1;
  }

  // Check if target is at mid2
  if (arr[mid2] === target) {
    return mid2;
  }

  // If target is less than mid1, search in left third
  if (target < arr[mid1]) {
    return ternarySearchHelper(arr, target, left, mid1 - 1);
  }

  // If target is greater than mid2, search in right third
  if (target > arr[mid2]) {
    return ternarySearchHelper(arr, target, mid2 + 1, right);
  }

  // If target is between mid1 and mid2, search in middle third
  return ternarySearchHelper(arr, target, mid1 + 1, mid2 - 1);
}
