/**
 * @function aliquotSum
 * @description Returns the aliquot sum of the provided number
 * @summary The aliquot sum of a number n is the sum of all the proper divisors
 * of n apart from n itself.
 * So, for example, the number 6 has three proper divisors, 1, 2, 3
 * Hence its aliquot sum is 1 + 2 + 3 = 6
 * For all prime numbers, the aliquot sum is 1, and for 1, the aliquot sum is 0
 * @param {number} num The input number
 * @return {number} The aliquot sum of the number
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Aliquot_sum)
 * @example aliquotSum(18) = 21
 * @example aliquotSum(15) = 9
 */
export const aliquotSum = (num: number): number => {
  if (typeof num !== 'number') throw new TypeError('Input needs to be a number')
  if (num < 0) throw new TypeError('Input cannot be negative')
  if (!Number.isInteger(num)) throw new TypeError('Input cannot be a decimal')

  let sum = 0

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i
  }

  return sum
}
