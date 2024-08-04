/**
 * @description Exponential search algorithm for a sorted array.
 *
 * The algorithm searches for a specific value in a sorted array by first finding a range
 * where the value may be present and then performing a binary search within that range.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} x - target number to search for
 * @return {number | null} - index of the target number in the list, or null if not found
 * @see [ExponentialSearch](https://www.geeksforgeeks.org/exponential-search/)
 * @example exponentialSearch([1, 2, 3, 4, 5], 3) => 2
 * @example exponentialSearch([10, 20, 30, 40, 50], 35) => null
 */

export const exponentialSearch = (
    array: number[],
    x: number
  ): number | null => {
    const arrayLength = array.length;
    if (arrayLength === 0) return null;
  
    if (array[0] === x) return 0;
  
    let i = 1;
    while (i < arrayLength && array[i] <= x) {
      i = i * 2;
    }
  
    return binarySearch(array, x, i / 2, Math.min(i, arrayLength - 1));
  };
  
  const binarySearch = (
    array: number[],
    x: number,
    start: number,
    end: number
  ): number | null => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (array[mid] === x) {
        return mid;
      } else if (array[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return null;
  };
  