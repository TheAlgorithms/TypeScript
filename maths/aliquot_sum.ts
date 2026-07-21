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

  if (num <= 1) return 0

  let sum = 1

  for (let divisor = 2; divisor <= num / divisor; divisor++) {
    if (num % divisor === 0) {
      sum += divisor

      const pairedDivisor = num / divisor
      if (pairedDivisor !== divisor) sum += pairedDivisor
    }
  }

  return sum
}
