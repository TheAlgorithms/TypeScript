/**
 * @function binaryExponentiationIterative
 * @description Calculate the result of a number raised to the power of another number using binary exponentiation.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent number.
 * @returns {number} - The result of the base number raised to the power of the exponent number.
 * @throws {TypeError} - when base is not a number.
 * @throws {TypeError} - when exponent is not a positive integer.
 * @example binaryExponentiationIterative(2, 10) => 1024
 */

export const binaryExponentiationIterative = (
  base: number,
  exponent: number
): number => {
  if (typeof base !== 'number') {
    throw new TypeError('base must be a number')
  }

  if (!Number.isInteger(exponent) || exponent < 0) {
    throw new TypeError('exponent must be a positive integer')
  }

  if (exponent === 0) return 1
  if (exponent === 1) return base
  if (base === 0) return 0
  if (base === 1) return 1

  let result = 1
    
    while (exponent > 0) {
        if (exponent % 2 === 1) {
        result *= base
        }
        base *= base
        exponent = Math.floor(exponent / 2)
    }

    return result;
}
