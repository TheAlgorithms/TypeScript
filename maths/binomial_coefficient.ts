import { Factorial } from "./factorial";
/**
 * @function BinomialCoefficient
 * @description Calculate the binomial coefficient (n choose k) of two input numbers.
 * @param {number} n - the total number of items
 * @param {number} k - the number of items to be chosen
 * @return {number} - Binomial coefficient (n choose k)
 * @see https://en.wikipedia.org/wiki/Binomial_coefficient
 * @example BinomialCoefficient(5, 2) = 10
 * @example BinomialCoefficient(10, 3) = 120
 * @example BinomialCoefficient(6, 0) = 1
 */

export const BinomialCoefficient = (n: number, k: number): number => {
    // Check if k is larger than n or negative
    if (k > n || k < 0) {
        return 0;
    }

    // Calculate the binomial coefficient using the implemented factorial
    const numerator = Factorial(n);
    const denominator = Factorial(k) * Factorial(n - k);
    return numerator / denominator;
};
