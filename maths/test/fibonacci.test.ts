import { nthFibonacci, nthFibonacciRecursively } from '../fibonacci';

describe('nthFibonacci', () => {
  it.each([ true, false ])('should return the value of 0', (recursive: boolean) => {
    if (recursive) {      
      expect(nthFibonacciRecursively(0)).toBe(0);
    } else {      
      expect(nthFibonacci(0)).toBe(0);
    }
  });

  it.each([true, false])('should return the value of 1', (recursive: boolean) => {
    if (recursive) {
      expect(nthFibonacciRecursively(1)).toBe(1);
      expect(nthFibonacciRecursively(2)).toBe(1);
    } else {
      expect(nthFibonacci(1)).toBe(1);
      expect(nthFibonacci(2)).toBe(1);
    }
  });

  it.each([true, false])(
    'should return the value from the fibonacci sequence',
    (recursive: boolean) => {
      if (recursive) {
        expect(nthFibonacciRecursively(5)).toBe(5);
        expect(nthFibonacciRecursively(10)).toBe(55);
        expect(nthFibonacciRecursively(15)).toBe(610);
      } else {
        expect(nthFibonacci(5)).toBe(5);
        expect(nthFibonacci(10)).toBe(55);
        expect(nthFibonacci(15)).toBe(610);
      }
    },
  );
});
