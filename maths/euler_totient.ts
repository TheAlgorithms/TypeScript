/**
 * @description counts the positive integers up to a given integer n that are relatively prime to n.
 * @param {number} n - A natural number.
 * @return {number} - euler's totient.
 * @see https://en.wikipedia.org/wiki/Euler%27s_totient_function
 * @example phi(4) = 2
 * @example phi(5) = 4
 */
export const phi = (n: number): number => {
  let result: number = n
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      while (n % i == 0) n = n / i
      result -= Math.floor(result / i)
    }
  }
  if (n > 1) result -= Math.floor(result / n)

  return result
}
