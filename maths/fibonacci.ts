/**
 * A function to get nth Fibonacci number
 * @param number The input integer
 * @return {number} Fibonacci number of `number`
 * @example nthFibonacci(4) => 3 | nthFibonacci(6) => 8
 * @see https://en.m.wikipedia.org/wiki/Fibonacci_number
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */
function* generateFibonacci(): Generator<number> {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    const c = a + b;
    a = b;
    b = c;
  }
}

export const nthFibonacci = (number: number): number => {
  if (isNaN(number)) throw new Error('The input needs to be a number');
  if (!Number.isInteger(number) || number < 0) throw new Error('The input needs to be a non-negative integer');

  if (number === 0) {
    return 0;
  }

  const fibonacciGenerator = generateFibonacci();
  let result = 0;
  for (let i = 0; i <= number; ++i) {
    result = fibonacciGenerator.next().value;
  }

  return result;
};