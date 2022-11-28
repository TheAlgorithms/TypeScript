/**
 * @function IsEven
 * @description Determine whether a number is even.
 * @param {Number} num - A number.
 * @return {Boolean} - Whether the given number is even.
 * @see https://en.wikipedia.org/wiki/Parity_(mathematics)
 * @example IsEven(1) = false
 * @example IsEven(2) = true
 */
 export const IsEven = (num: number): boolean => {
    if (!Number.isInteger(num)) {
      throw new Error("only integers can be even or odd");
    }
  
    return num % 2 === 0;
  };