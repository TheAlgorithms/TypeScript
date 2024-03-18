/**
 * @function signum
 * @description Returns the sign of a number
 * @summary The signum function is an odd mathematical function, which returns the
 * sign of the provided real number.
 * It can return 3 values: 1 for values greater than zero, 0 for zero itself,
 * and -1 for values less than zero
 * @param {Number} input
 * @returns {-1 | 0 | 1 | NaN} sign of input (and NaN if the input is not a number)
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Sign_function)
 * @example signum(10) = 1
 * @example signum(0) = 0
 * @example signum(-69) = -1
 * @example signum("hello world") = NaN
 */
export const signum = (num: number) => {
  if (num === 0) return 0
  if (num > 0) return 1
  if (num < 0) return -1

  return NaN
}
