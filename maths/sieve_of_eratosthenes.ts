/**
 * @function sieveOfEratosthenes
 * @description Find the prime numbers between 2 and n
 * @param {number} n - numbers set the limit that the algorithm needs to look to find the primes
 * @return {number[]} - List of prime numbers
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes\
 * @example sieveOfEratosthenes(5) = [2,3,5]
 * @example sieveOfEratosthenes(10) = [2,3,5,7]
 */

export function sieveOfEratosthenes(n: number): number[] {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error('Only natural numbers are supported')
  }
  const numbers = new Array<boolean>(n + 1).fill(true)
  const primeNumbers: number[] = []
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      primeNumbers.push(i)
      for (let j = i + i; j <= n; j += i) {
        numbers[j] = false
      }
    }
  }
  return primeNumbers
}
