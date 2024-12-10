import {
  takeLeft,
} from 'fp-ts/lib/Array'

import { isPrime } from './primes'

function range(start: number, end: number, step: number = 1): number[] {
  const result: number[] = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * @function goldbachNumbers
 * @description Return the goldbach numbers for a given even number
 * @param {Number} n - a positive even number
 * @return {Number} - an array of two numbers representing the goldbach numbers for N
 * @see https://en.wikipedia.org/wiki/Goldbach%27s_conjecture
 * @example goldbachNumbers(28) = [5, 23]
 * @example goldbachNumbers(16) = [5, 11]
 * @example goldbachNumbers(20) = [3, 17]
 */
export const goldbachNumbers = (n: number): number[] => {
  const primes = range(2,n).filter( (m: number): Boolean => isPrime(m) && isPrime(n - m))
  if (primes.length == 0) {
    []
  }
  let m = takeLeft(1)(primes)[0]
  return [m, n-m]
}


/**
 * @function goldbachCompositions
 * @description Return the goldbach numbers for all even numbers in a given range of positive integers, low and high
 * @param {Number, Number} low and high, low < high
 * @return {Number} - an array of tuples with the first element representing the even number, and the second is the two primes that sum to it.
 * @see https://en.wikipedia.org/wiki/Goldbach%27s_conjecture
 * @example goldbachCompositiions(20, 30) = [
 *    [20,[3,17]],
 *    [22,[3,19]],
 *    [24,[5,19]],
 *    [26,[3,23]],
 *    [28,[3,25]]
 * ]
 */
export const goldbachCompositions = (low: number, high: number): [number, number[]][] => {
  let lo = (low % 2 == 0) ? low : low + 1
  let hi = (high % 2 == 0) ? high : high - 1

  
  return range(lo, hi, 2).map((n: number) => [n, goldbachNumbers(n)] )
}