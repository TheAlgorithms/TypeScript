import {nthFibonacci} from '../fibonacci';

describe('nthFibonacci', () => {
  it('should return the value of 0', () => {
    expect(nthFibonacci(0)).toBe(0);
  });

  it('should return the value of 1', () => {        
    expect(nthFibonacci(1)).toBe(1);
    expect(nthFibonacci(2)).toBe(1);
  });

  it('should return the value from the fibonacci sequence', () => {
    expect(nthFibonacci(5)).toBe(5);
    expect(nthFibonacci(10)).toBe(55);
    expect(nthFibonacci(15)).toBe(610);
  });
});