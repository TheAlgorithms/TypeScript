/**
 * @function BinaryConvert
 * @description Convert the decimal to binary.
 * @param {number} num - The input integer
 * @return {number} - Binary of num.
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 * @example BinaryConvert(12) = 1100
 * @example BinaryConvert(12 + 2) = 1110
 */

export const BinaryConvert = (num: number): number => {
  let power = 1
  let binary = 0

  while (num !== 0) {
    const rem = num % 2
    num = Math.floor(num / 2)
    binary = rem * power + binary
    power *= 10
  }

  return binary
}
