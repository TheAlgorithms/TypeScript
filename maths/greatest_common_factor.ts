/**
 * @function GreatestCommonFactor
 * @description Determine the greatest common factor of a group of numbers.
 * @param {Number[]} nums - An array of numbers.
 * @return {Number} - The greatest common factor.
 * @see https://www.mathsisfun.com/greatest-common-factor.html
 * @example GreatestCommonFactor(12, 8) = 4
 * @example GreatestCommonFactor(3, 6) = 3
 * @example GreatestCommonFactor(32, 16, 12) = 4
 */

export const binaryGCF = (a: number, b: number): number => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    throw new Error("numbers must be natural to determine factors");
  }

  while (b) {
    [a, b] = [b, a % b]
  }
  return a;
}

export const greatestCommonFactor = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error("at least one number must be passed in");
  }
  
  return nums.reduce(binaryGCF);
};

/**
 * @author : dev-madhurendra
 * Finds the Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers.
 *
 * @param {number} x - The first integer.
 * @param {number} y - The second integer.
 * @returns {number} The HCF/GCD of the two input numbers.
 *
 */
export const findHCFUsingEuclidAlgorithm = (x: number, y: number): number => y === 0 ? x : findHCFUsingEuclidAlgorithm(y, x % y)
