/**
 * @function Factors
 * @description Find all the factors of a natural number.
 * @param {number} num - A natural number.
 * @return {number[]} - An array of all the factors of given natural number.
 * @see https://en.wikipedia.org/wiki/Divisor
 * @example Factors(1) = [1]
 * @example Factors(4) = [1,2,4]
 * @example Factors(16) = [1,3,5,15]
 */

export const Factors = (num: number): number[] => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  const res: number[] = [];
  // iterate from 1 to num and push factors into the res array
  for (let i: number = 0; i <= num; i++) {
    if (num % i === 0) res.push(i);
  }

  return res;
};