/**
 * @function fibonacciSearch
 * @description Fibonacci search algorithm for a sorted array.
 *
 * The algorithm searches for a specific value in a sorted array using Fibonacci numbers
 * to divide the array into smaller subarrays. This algorithm is useful for large arrays where
 * the cost of accessing elements is high.
 *
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or -1 if not found
 * @see [FibonacciSearch](https://www.geeksforgeeks.org/fibonacci-search/)
 * @example fibonacciSearch([1,2,3], 2) => 1
 * @example fibonacciSearch([4,5,6], 2) => -1
 */

export const fibonacciSearch = (array: number[], target: number): number => {
    const arrayLength = array.length;
    let fibNMinusTwo = 0;  // (n-2)'th Fibonacci No.
    let fibNMinusOne = 1;  // (n-1)'th Fibonacci No.
    let fibN = fibNMinusTwo + fibNMinusOne;  // n'th Fibonacci
  
    while (fibN < arrayLength) {
      fibNMinusTwo = fibNMinusOne;
      fibNMinusOne = fibN;
      fibN = fibNMinusTwo + fibNMinusOne;
    }
  
    let offset = -1;
  
    while (fibN > 1) {
      let i = Math.min(offset + fibNMinusTwo, arrayLength - 1);
  
      if (array[i] < target) {
        fibN = fibNMinusOne;
        fibNMinusOne = fibNMinusTwo;
        fibNMinusTwo = fibN - fibNMinusOne;
        offset = i;
      } else if (array[i] > target) {
        fibN = fibNMinusTwo;
        fibNMinusOne = fibNMinusOne - fibNMinusTwo;
        fibNMinusTwo = fibN - fibNMinusOne;
      } else {
        // Element found then return index
        return i;
      }
    }
  
    if (fibNMinusOne && array[offset + 1] === target) {
      return offset + 1;
    }
  
    // Element not found then return -1
    return -1;
  }
  