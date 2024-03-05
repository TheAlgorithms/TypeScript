/**
 * @function binaryConvert
 * @description Convert the decimal to binary.
 * @param {number} num - The input integer
 * @return {string} - Binary of num.
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 * @example binaryConvert(12) = 1100
 * @example binaryConvert(12 + 2) = 1110
 */

export const binaryConvert = (num: number): string => {
  let binary = ''

  while (num !== 0) {
    binary = (num % 2) + binary
    num = Math.floor(num / 2)
  }

  return binary
}
