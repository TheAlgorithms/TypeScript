/**
 * Approximate base-2 logarithm using bitwise operators.
 *
 * Returns floor(log2(n)) for positive integers n. Throws a RangeError for n <= 0.
 *
 * @author dev-madhurendra <https://github.com/dev-madhurendra>
 * @see https://handwiki.org/wiki/Binary_logarithm
 * @param n - Positive integer input.
 * @returns floor(log2(n)).
 * @throws RangeError if n <= 0.
 */
export const logTwo = (n: number): number => {
  if (n <= 0) {
    throw new RangeError('logTwo is only defined for positive integers.')
  }

  let x = n
  let result = 0

  while (x >> 1) {
    x >>= 1
    result++
  }

  return result
}