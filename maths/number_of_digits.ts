/**
 * @function numberOfDigits
 * @description Calculate the number of digits of a natural number.
 * @param {number} num - A natural number.
 * @return {number} - Number of digits of given natural number.
 * @see https://math.stackexchange.com/a/231745/518862
 * @example numberOfDigits(18) = 2
 * @example numberOfDigits(294568) = 6
 * @example numberOfDigits(128798319794) = 12
 */

export const numberOfDigits = (num: number): number => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  return Math.floor(Math.log10(num)) + 1
}
