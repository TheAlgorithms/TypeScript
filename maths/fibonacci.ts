/**
 * A function to get `n`th Fibonacci number.
 * 
 * @param n The index of the number in the Fibonacci sequence.
 * @return The Fibonacci number on the `n`th index in the sequence.
 * 
 * @example nthFibonacci(4) => 3 | nthFibonacci(6) => 8
 * @see https://en.m.wikipedia.org/wiki/Fibonacci_number
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 * @author zFlxw <https://github.com/zFlxw>
 */
export const nthFibonacci = (n: number): number => {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }
  
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};
