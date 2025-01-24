/**
 * Generates the Collatz sequence for a given positive integer.
 *
 * The Collatz conjecture sequence is defined as follows:
 * - Start with any positive integer `n`.
 * - If `n` is even, divide it by 2.
 * - If `n` is odd, multiply it by 3 and add 1.
 * - Repeat the process with the new value of `n` until `n` equals 1.
 *
 * @param n - A positive integer to generate the Collatz sequence.
 * @throws {Error} - Throws an error if `n` is not a positive integer.
 * @returns {number[]} - The Collatz sequence starting from `n`.
 *
 * @example
 * collatzSequence(5); // Returns: [5, 16, 8, 4, 2, 1]
 * collatzSequence(10); // Returns: [10, 5, 16, 8, 4, 2, 1]
 */
export const collatzSequence = (n: number): number[] => {
  if (n <= 0 || !Number.isInteger(n)) {
    throw new Error('Sequence only defined for positive integers.')
  }

  const result: number[] = []

  while (n !== 1) {
    result.push(n)
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = n * 3 + 1
    }
  }

  result.push(1)
  return result
}
