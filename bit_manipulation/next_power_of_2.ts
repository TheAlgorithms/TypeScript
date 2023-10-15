/**
 * @author : vcnovaes<https://github.com/vcnovaes>
 *
 * Given an integer number n, if is a power of 2 returns n, else returns the next highest power of two
 * @param {number} n - integer number to round to power of 2.
 * @returns {number} The rounded power of two of n
 * @explanation
 *  - First we decrement n by 1 (to handle the case when n itself is the power of two)
 *  - Run a loop by initializing the result by 2, where:
 *      We double the result value at each iteration of the loop and divide n in half and continue the loop
 *      till n becomes 0.
 *
 * @example
 * const result = findNextPowerOf2(20); // Returns 32
 * const result = findNextPowerOf2(4);  // Returns 4
 */

export const findNextPowerOf2 = (n: number): number => {
  n !== 0 ? n-- : n;
  let result = 2;
  while ((n >>= 1)) result = result << 1;

  return result;
};
