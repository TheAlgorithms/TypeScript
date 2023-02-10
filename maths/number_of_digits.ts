/**
 * @function NumberOfDigits
 * @description Calculate the number of digits of a natural number.
 * @param {number} num - A natural number.
 * @return {number} - Number of digits of given natural number.
 * @see https://math.stackexchange.com/a/231745/518862
 * @example NumberOfDigits(18) = 2
 * @example NumberOfDigits(294568) = 6
 * @example NumberOfDigits(128798319794) = 12
 */

export const NumberOfDigits = (num: number): number => {
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  return Math.floor(Math.log10(num)) + 1;
};