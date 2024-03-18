/**
 * @function squareRoot
 * @description Finding the square root of a number using Newton's method.
 * @param {number} num - A number.
 * @param {number} precision - Precision of square root, 1e-15 by default.
 * @returns {number} - Square root of the given number.
 * @see https://www.geeksforgeeks.org/find-root-of-a-number-using-newtons-method/
 * @example SquareRoot(36) = 6
 * @example SquareRoot(50) = 7.0710678118654755
 */

export const squareRoot = (num: number, precision: number = 1e-15): number => {
  if (num < 0) throw new Error('number must be non-negative number')
  if (num === 0) return 0

  let sqrt: number = num
  let curr: number

  while (true) {
    curr = 0.5 * (sqrt + num / sqrt)
    if (Math.abs(curr - sqrt) < precision) {
      return sqrt
    }
    sqrt = curr
  }
}
