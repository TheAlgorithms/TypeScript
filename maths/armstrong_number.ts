/**
 * @function armstrongNumber
 * @description Check if the provided number is an Armstrong number or not.
 * @summary Armstrong numbers are numbers, the sum of whose digits each raised
 * to the power of the number of digits is equal to the number itself.
 * For example:
 * 370 is an Armstrong number since 3^3 + 7^3 + 0^3 = 370
 * (These numbers are also known as Narcissistic numbers, and Pluperfect numbers)
 * @param {number} num The number you want to check for
 * @return {boolean} Whether the input number is an Armstrong number
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Armstrong_number)
 * @see [OEIS](https://oeis.org/A005188)
 * @example armstrongNumber(370) = true
 * @example armstrongNumber(10) = false
 */
export const armstrongNumber = (num: number): boolean => {
  if (typeof num !== 'number' || num <= 0) return false

  let compNum = 0
  let cloneNum = num
  const numOfDigits = Math.floor(1 + Math.log10(num))

  while (cloneNum > 0) {
    compNum += Math.pow(cloneNum % 10, numOfDigits)
    cloneNum = Math.floor(cloneNum / 10)
  }

  return compNum === num
}
