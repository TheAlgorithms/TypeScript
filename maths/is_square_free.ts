/**
 * @function isSquareFree
 * @description A number is said to be square-free if no prime factor divides it more than once, i.e., the largest power of a prime factor that divides n is one.
 * @param {number} n - A number.
 * @return {boolean} - True if given number is a square free.
 * @see https://www.geeksforgeeks.org/square-free-number/
 * @example isSquareFree(10) = true
 * @example isSquareFree(20) = false
 */

export const isSquareFree = (n: number): boolean => {
  if (n < 0) throw new Error('number must be a natural number > 0')
  if (n % 2 === 0) n = n / 2
  if (n % 2 === 0) return false

  for (let i: number = 3; i <= Math.sqrt(n); i = i + 2) {
    if (n % i === 0) {
      n = n / i
      if (n % i === 0) return false
    }
  }
  return true
}
