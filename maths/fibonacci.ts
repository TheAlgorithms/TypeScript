/**
 * A function to get nth Fibonacci number.
 *
 * Time Complexity: linear (O(n))
 *
 * @param number The index of the number in the Fibonacci sequence.
 * @return The Fibonacci number on the nth index in the sequence.
 *
 * @example nthFibonacci(4) => 3 | nthFibonacci(6) => 8
 * @see https://en.m.wikipedia.org/wiki/Fibonacci_number
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */
export const nthFibonacci = (number: number): number => {
  if (number < 0) {
    throw 'Number should be greater than 0';
  }

  if (number === 0) {
    return 0;
  }

  let a = 0,
    b = 1;
  for (let i = 1; i < number; ++i) {
    const c = a + b;

    a = b;
    b = c;
  }

  return b;
};

/**
 * A function to get nth Fibonacci number recursively. **Note: This recursive approach increases the time complexity**
 *
 * Time Complexity: exponential (O(ϕ^n))
 *
 * @param number The index of the number in the Fibonacci sequence.
 * @return The Fibonacci number on the nth index in the sequence.
 *
 * @example nthFibonacci(4) => 3 | nthFibonacci(6) => 8
 * @see https://en.m.wikipedia.org/wiki/Fibonacci_number
 * @author zFlxw <https://github.com/zFlxw>
 */
export const nthFibonacciRecursively = (number: number): number => {
  if (number === 0) {
    return 0;
  }

  if (number <= 2) {
    return 1;
  }

  return (
    nthFibonacciRecursively(number - 1) + nthFibonacciRecursively(number - 2)
  );
};


/**
 * @param number The index of the number in the Fibonacci sequence.
 * @return The Fibonacci number on the nth index in the sequence.
 * @example nthFibonacci(4) => 3 | nthFibonacci(6) => 8
 * @see : https://math.hmc.edu/funfacts/fibonacci-number-formula/
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 */

const sqrt5 = Math.sqrt(5)
const phi = (1 + sqrt5) / 2
const psi = (1 - sqrt5) / 2

export const nthFibonacciUsingFormula = (n : number) => Math.round((phi ** n - psi ** n) / sqrt5)
