/**
 * Implementation of the Sieve of Eratosthenes algorithm.
 *
 * @param limit An integer _n_ > 1
 * @returns All prime numbers from 2 through {@link limit}
 *
 * @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
export function sieveOfEratosthenes(limit: number): number[] {
  if (!Number.isInteger(limit) || limit <= 1) {
    throw new Error('limit should be an integer greater than 1')
  }

  const maybePrime: boolean[] = new Array(limit + 1).fill(true)
  for (let i = 2; i * i <= limit; i++) {
    if (!maybePrime[i]) continue
    for (let j = i * i; j <= limit; j += i) {
      maybePrime[j] = false
    }
  }

  const primes: number[] = []
  for (let i = 2; i < maybePrime.length; i++) {
    if (maybePrime[i]) {
      primes.push(i)
    }
  }

  return primes
}

/**
 * Generator that yields primes.
 *
 * Inspired by https://gist.github.com/e-nikolov/cd94db0de2a6b70da144124ae93a6458
 */
export function* primeGenerator() {
  type NumberGen = Generator<number, void, any>

  function* filter(input: NumberGen, prime: number): NumberGen {
    while (true) {
      const { done, value } = input.next()
      if (done) break
      if (value % prime !== 0) yield value
    }
  }

  let chain: NumberGen = (function* () {
    let i = 2
    while (true) yield i++
  })()

  while (true) {
    const { done, value } = chain.next()
    if (done) break
    yield value
    chain = filter(chain, value)
  }
}

/**
 * @function isPrime
 * @description Determine if given number is prime.
 * @param {number} num - A natural number.
 * @return {boolean} - Whether the given number is prime.
 * @see https://en.wikipedia.org/wiki/Prime_number
 * @example isPrime(2) = false
 * @example isPrime(3) = true
 */
export const isPrime = (num: number): boolean => {
  // raise corresponding errors upon invalid inputs
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('only natural numbers are supported')
  }

  // handle input being 1
  if (num === 1) return false

  // iterate from 2 to the square root of num to find a factor
  // return false upon finding a factor
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }

  // if the entire loop runs without finding a factor, return true
  return true
}
