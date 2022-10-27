/**
 * @function  SieveOfEratosthenes
 * @description Find the prime numbers between 2 and n 
 * @param {number} n - numbers set the limit that the algorithm needs to look to find the primes
 * @return {number[]} - List of prime numbers
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes\
 * @example SieveOfErastosthenes(5) = [2,3,5] 
 * @example SieveOfErastosthenes(10) = [2,3,5,7]
 */

export function SieveOfEratosthenes(n: number): number[] {
  const numbers = new Array<boolean>(n + 1)
    .fill(true)
  const primeNumbers: number[] = [];
  for (let i = 2; i <= n; i++) {
    if (numbers[i]) {
      primeNumbers.push(i);
      for (let j = i + i; j <= n; j += i) {
        numbers[i] = false;
      }
    }
  }
  return primeNumbers;
}
