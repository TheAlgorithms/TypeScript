/**
 * @function digitSum
 * @description Calculate the sum of all digits of a natural number (number base 10).
 * @param {number} num - A natural number.
 * @return {number} - Sum of all digits of given natural number.
 * @see https://en.wikipedia.org/wiki/Digit_sum
 * @example digitSum(12) = 3
 * @example digitSum(9045) = 18
 */

export const digitSum = (num: number): number => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  let sum = 0
  while (num != 0) {
    sum += num % 10
    num = Math.floor(num / 10)
  }

  return sum
}
