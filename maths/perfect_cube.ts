/**
 * A number is a perfect cube, if the cube root is an integer.
 *
 * @param n The number to check.
 */

export const perfectCube = (n: number): boolean => {
  return Math.round(n ** (1 / 3)) ** 3 === n
}
