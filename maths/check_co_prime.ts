import { greatestCommonFactor } from './greatest_common_factor'

/**
 * @function areCoPrime
 * @description Check if two numbers are co-prime
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {boolean} - true if a and b are co-prime, false otherwise
 * @throws {TypeError} - if inputs are not integers
 * @throws {Error} - if inputs are zero
 * @see https://en.wikipedia.org/wiki/Coprime_integers
 * @example areCoPrime(14, 15) => true
 *
 */

export const areCoPrime = (a: number, b: number): boolean => {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new TypeError('Inputs must be integers')
  }

  if (a === 0 || b === 0) {
    throw new Error('Inputs must be non-zero')
  }

  a = Math.abs(a)
  b = Math.abs(b)

  return greatestCommonFactor([a, b]) === 1
}
