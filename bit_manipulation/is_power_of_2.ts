/**
 * Checks whether the given number is a power of two.
 *
 * A positive integer is a power of two if and only if it has exactly one bit set in its
 * binary representation. Examples: 1 (2^0), 2 (2^1), 4 (2^2), 16 (2^4).
 *
 * The expression (n & (n - 1)) clears the lowest set bit of n. For powers of two
 * this becomes zero, so n & (n - 1) === 0.
 *
 * @author dev-madhurendra <https://github.com/dev-madhurendra>
 * @param n - The number to test.
 * @returns true if n is a power of two; otherwise false. Returns false for n <= 0.
 */
export const isPowerOfTwo = (n: number): boolean => n > 0 && (n & (n - 1)) === 0