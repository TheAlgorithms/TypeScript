/**
 * @function isOdd
 * @description Determine whether a number is odd.
 * @param {Number} num - A number.
 * @return {Boolean} - Whether the given number is odd.
 * @see https://en.wikipedia.org/wiki/Parity_(mathematics)
 * @example isOdd(1) = true
 * @example isOdd(2) = false
 */
export const isOdd = (num: number): boolean => {
  if (!Number.isInteger(num)) {
    throw new Error('only integers can be even or odd')
  }

  return num % 2 !== 0
}
