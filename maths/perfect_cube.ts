/**
 * A number is a perfect cube, if the cube root is an integer.
 *
 * @param n The number to check.
 */

export const perfectCube = (n: number) => {
  return Number.isInteger(Math.pow(n, 1 / 3));
};
