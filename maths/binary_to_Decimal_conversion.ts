/**
 * @function binaryToDecimal
 * @description Convert the  binary to decimal .
 * @param {number} binary - The input string
 * @return {string} -  decimal of binary.
 * @example binaryToDecimal('1011') = 11
 * @example binaryToDecimal('1110') = 14
 */

function binaryToDecimal(binary: string): number {
  let decimal: number = 0;
  let power: number = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
}


