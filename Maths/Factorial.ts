/**
 * @function Factorial
 * @description Calculate the factorial of a positive integer.
 * @param {number} num - A positive number.
 * @return {number} - The factorial.
 * @see https://en.wikipedia.org/wiki/Factorial
 * @example Factorial(0) = 1
 * @example Factorial(3) = 6
 */
export const Factorial = (num: number): number => {
  if (num < 0) {
    throw new Error("num must be >= 0");
  }

  if (!Number.isInteger(num)){
    throw new Error("only integers are supported");
  }

  return num === 0 ? 1 : num * Factorial(num - 1);
};
