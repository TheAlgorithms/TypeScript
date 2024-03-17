import { factorial } from './factorial'
/**
 * @function binomialCoefficient
 * @description Calculate the binomial coefficient (n choose k) of two input numbers.
 * @param {number} n - the total number of items
 * @param {number} k - the number of items to be chosen
 * @return {number} - Binomial coefficient (n choose k)
 * @see https://en.wikipedia.org/wiki/Binomial_coefficient
 * @example binomialCoefficient(5, 2) = 10
 * @example binomialCoefficient(10, 3) = 120
 * @example binomialCoefficient(6, 0) = 1
 */

export const binomialCoefficient = (n: number, k: number): number => {
  // Check if k is larger than n or negative
  if (k > n || k < 0) {
    return 0
  }

  // Calculate the binomial coefficient using the implemented factorial
  const numerator = factorial(n)
  const denominator = factorial(k) * factorial(n - k)
  return numerator / denominator
}
