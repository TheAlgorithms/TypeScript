/**
 * @function mean
 * @description This script will find the mean value of an array of numbers.
 * @param {number[]} nums - Array of numbers
 * @return {number} - Mean of nums.
 * @see [Mean](https://en.wikipedia.org/wiki/Mean)
 * @example mean([1, 2, 4, 5]) = 3
 * @example mean([10, 40, 100, 20]) = 42.5
 */

const mean = (nums: number[]): number => {
    if (!Array.isArray(nums)) {
      throw new TypeError('Invalid Input');
    }
  
    // This loop sums all values in the 'nums' array using forEach loop
    const sum: number = nums.reduce((sum, cur) => sum + cur, 0);
  
    // Divide sum by the length of the 'nums' array.
    return sum / nums.length;
  };
  
  export { mean };