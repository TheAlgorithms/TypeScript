/**
 * @function isDivisible
 * @description Checks is number is divisible by another number without remainder.
 * @param {number} num1 - first number, a dividend.
 * @param {number} num2 - second number, a divisor.
 * @return {boolean} - true if first number can be divided by second number without a remainder.
 * @example isDivisible(10, 2) = true
 * @example isDivisible(11, 3) = false
 */

export const isDivisible = (num1: number, num2: number): boolean => {
  if (num2 === 0) {
    throw new Error('Cannot divide by 0')
  }
  return num1 % num2 === 0
}
