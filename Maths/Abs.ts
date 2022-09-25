/**
 * A function to get absolute value of a given number
 * @param {number} num - The input integer
 * @return {number} Absolute vlaue of `num`
 * @example abs(-10) => 10 | abs(50) => 50 | abs(0) => 0
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @author Owais28 <https://github.com/Owais28>
 */

export const abs = (num: number ): number => {
  const validNumber : number = +num; // converted to number, also can use - Number(num)

  if (Number.isNaN(validNumber)) {
    throw new TypeError("Argument is NaN - Not a Number");
  }

  return validNumber < 0 ? -validNumber : validNumber; // if number is less then zero mean negative then it converted to positive. i.e -> n = -2 = -(-2) = 2
};
