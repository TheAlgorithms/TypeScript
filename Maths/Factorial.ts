/**
 * @function Factorial
 * @description Calculate the factorial of a natural number.
 * @param {number} num - A natural number.
 * @return {number} - The factorial.
 * @see https://en.wikipedia.org/wiki/Factorial
 * @example Factorial(0) = 1
 * @example Factorial(3) = 6
 */
export const Factorial = (num: number): number => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  return num === 0 ? 1 : num * Factorial(num - 1);
};
