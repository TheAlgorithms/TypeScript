/** 
 * @function ArmstrongNumber
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
 * @example ArmstrongNumber(370) = true
 * @example ArmstrongNumber(10) = false
 */
export const ArmstrongNumber = (num: number): boolean => {
  if (typeof num !== 'number' || num <= 0) return false;

  let compNum = 0

  const digitArr = num
    .toString()
    .split('');

  digitArr.map((digit) => compNum += Math.pow(Number(digit), digitArr.length))

  return num === compNum
}
