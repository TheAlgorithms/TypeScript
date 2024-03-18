/**
 * @function DoubleFactorialIterative
 * @description Calculate the double factorial of a number (iterative implementation)
 * @summary In mathematics, double factorial of a number n is denoted by n!!.
 * It is not to be confused with (n!)!, which is the factorial function iterated twice.
 * The double factorial is the product of all positive integers upto n that have the same parity (odd or even)
 * as n.
 * Therefore,
 * 9!! = 9 . 7 . 5 . 3 . 1
 * 10!! = 10 . 8 . 6 . 4 . 2
 *
 * Please note that for factorials of even numbers, the series ends at 2.
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Double_factorial)
 * @see [Mathworld](https://mathworld.wolfram.com/DoubleFactorial.html)
 * @see [GeeksForGeeks](https://www.geeksforgeeks.org/double-factorial/)
 * @example DoubleFactorialIterative(4) = 8
 * @example DoubleFactorialIterative(5) = 15
 */
const DoubleFactorialIterative = (n: number) => {
  if (n < 0) throw new RangeError('The number needs to be non-negative')
  let doubleFactorial = 1

  for (let i = n; i > 0; i -= 2) doubleFactorial *= i

  return doubleFactorial
}

export { DoubleFactorialIterative }
