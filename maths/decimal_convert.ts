/**
 * @description Convert the binary to decimal.
 * @param {string} binary - The input binary
 * @return {number} - Decimal of binary.
 * @see [DecimalConvert](https://www.programiz.com/javascript/examples/binary-decimal)
 * @example decimalConvert("1100") = 12
 */

export const decimalConvert = (binary: string): number => {
  let decimal = 0
  let binaryArr = binary.split('').reverse()

  for (let i = 0; i < binaryArr.length; i++) {
    decimal += parseInt(binaryArr[i]) * Math.pow(2, i)
  }

  return decimal
}
