/**
 * @author : vcnovaes<https://github.com/vcnovaes>
 * Find the highest power of 2 smaller or equal a given number n
 *
 * @param {number} n - The input number
 * @returns {number} the highest power of 2 smaller or equal n
 *
 * @example
 * const result = highestPowerOf2(16); // Returns 16
 * const result2 = highestPowerOf2(5);  // Returns 4
 */

export const highestPowerOf2 = (n: number) => {
  let result = 0;
  for (let i = n; i >= 1; i--) {
    if ((i & (i - 1)) === 0) {
      result = i;
      break;
    }
  }
  return result;
};
