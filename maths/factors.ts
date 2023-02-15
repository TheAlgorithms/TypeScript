/**
 * @function FindFactors
 * @description Find all the factors of a natural number.
 * @param {number} num - A natural number.
 * @return {number[]} - An array of all the factors of given natural number.
 * @see https://en.wikipedia.org/wiki/Divisor
 * @example FindFactors(1) = [1]
 * @example FindFactors(4) = [1,2,4]
 * @example FindFactors(16) = [1,3,5,15]
 */

export const FindFactors = (num: number): number[] => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("only natural numbers are supported");
  }

  const res: number[] = [];
  // iterate from 1 to square root of num
  // push factors into the res array
  for (let i: number = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) res.push(i);
  }

  // add num to the result array
  res.push(num);
  return res;
};