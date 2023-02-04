/**
 * @fileoverview A function to calculate the arithmetic mean of an array of numbers
 * @author [Muhammad Awais]
 * @see arithmeticMean.test.js
 * @see arithmeticMean.ts
 * @function arithmeticMean
 * @description A function to calculate the arithmetic mean of an array of numbers
 * @summary The arithmetic mean is the sum of the elements in the array divided by the number of elements in the array
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Arithmetic_mean)
 * @param {number[]} array - An array of numbers
 * @returns {number} - The arithmetic mean of the array
 * @example arithmeticMean([1,2,3,4,5]) = 3
 * @example arithmeticMean([1,2,3,4,5,6]) = 3.5
 */

export function arithmeticMean(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b, 0) / array.length;
}
