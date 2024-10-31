/**
 * @function isolateDecimal
 * @description Isolate the decimal part of a number.
 * @param {number} num - The number to isolate the decimal part from.
 * @returns {Object} - Object containing the integral part and the decimal part.
 * @throws {TypeError} - when the input is not a number.
 * @example isolateDecimal(3.14) => { integralPart: 3, decimalPart: 0.14 }
 */

export const isolateDecimal = (
  num: number
): { integralPart: number; decimalPart: number } => {
  if (typeof num !== 'number') {
    throw new TypeError('Input must be a number')
  }

  num = Math.abs(num)

  const integralPart = Math.trunc(num)
  const decimalPart = num - integralPart

  return { integralPart, decimalPart: Number(decimalPart.toFixed(10)) }
}
