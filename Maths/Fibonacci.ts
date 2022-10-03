/**
 * A function to get Fibonacci value of given number
 * @param number The input integer
 * @return {number} Fibonacci value of `number`
 * @example fibonacciValue(4) => 3 | fibonacciValue(6) => 8
 * @see https://en.m.wikipedia.org/wiki/Fibonacci_number
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */

export const fibonacciValue = (number: number): number => {
  if (number < 0)  throw "Number should be greater than 0";
  

  if (number === 0)  return 0;

  let a = 0, b = 1;

  for (let i = 1; i < number; ++i) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};
