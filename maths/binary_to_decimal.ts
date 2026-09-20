/**
 * @function binaryToDecimal
 * @description Convert binary string to decimal.
 * @param {string} str - The binary input.
 * @return {number} - Decimal value of str.
 * @example binaryToDecimal('1100') = 12
 * @example binaryToDecimal('1110') = 14
 */

export const binaryToDecimal = (str: string): number => {
  let number = 0

  for (let i = 0; i < str.length; i++) {
    number = number * 2 + Number(str[i])
  }

  return number
}
