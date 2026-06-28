/**
 * Checks whether the given number is a power of four.
 *
 * A positive integer is a power of four if:
 *  - it is a power of two (exactly one bit set), and
 *  - that bit is in an even position (0-based), e.g. 1 (2^0), 4 (2^2), 16 (2^4), ...
 *
 * This implementation uses the property that for powers of four: n % 3 === 1.
 *
 * @author dev-madhurendra <https://github.com/dev-madhurendra>
 * @param n - The number to check.
 * @returns true if n is a power of four; otherwise false.
 *
 * @example
 * isPowerOfFour(16)  // true  (16 = 4^2)
 * isPowerOfFour(5)   // false
 */
export const isPowerOfFour = (n: number): boolean =>
  n > 0 && (n & (n - 1)) === 0 && n % 3 === 1