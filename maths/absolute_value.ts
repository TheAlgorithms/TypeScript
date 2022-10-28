/**
 * @function AbsoluteValue
 * @description Calculate the absolute value of an input number.
 * @param {number} number - a numeric input value
 * @return {number} - Absolute number of input number
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example AbsoluteValue(-10) = 10
 * @example AbsoluteValue(50) = 50
 * @example AbsoluteValue(0) = 0
 */

export const AbsoluteValue = (number: number): number => {
  // if input number is less than 0, convert it to positive via double negation
  // e.g. if n = -2, then return -(-2) = 2
  return number < 0 ? -number : number;
};
