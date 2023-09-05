/**
 * Calculate the square root of a number.
 *
 * @param x The number to calculate the square root of.
 * @returns The square root of the input number.
 * @throws Error if the input is a negative number.
 *
 * @example
 * squareRoot(4); // Returns 2
 * squareRoot(9); // Returns 3
 * squareRoot(0); // Returns 0
 * squareRoot(-1); // Throws an error.
 *
 * @see https://en.wikipedia.org/wiki/Square_root
 */
export const squareRoot = (x: number): number => {
  if (isNaN(x) || x < 0) {
    throw new Error("Input must be a non-negative number.");
  }

  return Math.sqrt(x);
};
