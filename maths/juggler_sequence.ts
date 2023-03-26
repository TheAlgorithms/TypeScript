/**
 * The juggler sequence is a integer sequence that starts with an positive integer a and the subsequent terms are
 * described as following:
 * if a_k is even:
 *   a_k+1 = floor(sqrt(a_k))
 * else:
 *   a_k+1 = floor(sqrt(a_k^3))
 *
 * Time Complexity: linear (O(n))
 *
 * @param a The number to start with
 * @param n The index of the searched number in the sequence.
 * @returns The number at index n in the sequence.
 * @see https://en.wikipedia.org/wiki/Juggler_sequence
 */
export const jugglerSequence = (a: number, n: number) => {
  let k: number = a;
  for (let i: number = 0; i < n; i++) {
    if (k % 2 === 0) {
      k = Math.floor(Math.pow(k, 1 / 2));
    } else {
      k = Math.floor(Math.pow(k, 3 / 2));
    }
  }

  return k;
};
