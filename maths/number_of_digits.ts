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
  // raise corresponding errors upon invalid inputs
  if (typeof num !== 'number') throw new TypeError('Input needs to be a number');
  if (num < 0) throw new TypeError('Input cannot be negative');
  if (!Number.isInteger(num)) throw new TypeError('Input cannot be a decimal');

  return Math.floor(Math.log10(num)) + 1;
};