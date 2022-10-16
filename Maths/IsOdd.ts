/**
 * @function IsOdd
 * @description Determine whether a number is odd.
 * @param {Number} num - A number.
 * @return {Boolean} - Whether the given number is odd.
 * @see https://en.wikipedia.org/wiki/Parity_(mathematics)
 * @example IsOdd(1) = true
 * @example IsOdd(2) = false
 */
 export const IsOdd = (num: number): boolean => {
    if (!Number.isInteger(num)) {
      throw new Error("only integers can be even or odd");
    }
  
    return num % 2 !== 0;
  };