/**
 * @description Get exponenets of each prime number in factorization of a number n
 * @param {number} n - A natural number.
 * @return {Map<number, number>} - factorization of number n.
 * @see https://en.wikipedia.org/wiki/Integer_factorization
 * @example factorize(4) = Map {2 => 2}
 * @example factorize(5) = Map {5 => 1}
 */
export const factorize = (n: number): Map<number, number> => {
  const result: Map<number, number> = new Map()

  for (let i = 2; i * i <= n; i++) {
    while (n % i == 0) {
      let occurence = result.get(i)
      if (!occurence) occurence = 0
      result.set(i, occurence + 1)
      n = n / i
    }
  }
  if (n > 1) {
    let occurence = result.get(n)
    if (!occurence) occurence = 0
    result.set(n, occurence + 1)
  }

  return result
}
