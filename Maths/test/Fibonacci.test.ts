import {nthFibonacci} from '../Fibonacci';

describe('nthFibonacci', () => {
  test('should return correct value', () => {        
    expect(nthFibonacci(0)).toBe(0);  
    expect(nthFibonacci(1)).toBe(1);
    expect(nthFibonacci(5)).toBe(5);
    expect(nthFibonacci(4)).toBe(3);
    expect(nthFibonacci(0)).toBe(0);
  });
});