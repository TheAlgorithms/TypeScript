import {fibonacciValue} from '../Fibonacci';

describe('FibonacciValue', () => {
  
test('should return correct value', () => {
  
expect(fibonacciValue(0)).toBe(0);
expect(fibonacciValue(1)).toBe(1);
expect(fibonacciValue(5)).toBe(5);
expect(fibonacciValue(4)).toBe(3);
expect(fibonacciValue(0)).toBe(0);
  
});
});