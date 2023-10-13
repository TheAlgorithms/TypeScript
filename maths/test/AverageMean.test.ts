import { mean } from '../AverageMean';

describe('Tests for average mean', () => {
  it('should be a function', () => {
    expect(typeof mean).toEqual('function');
  });

  it('should throw an error for invalid input', () => {
    expect(() => mean('invalid')).toThrow();
  });

  it('should return the mean of an array of numbers', () => {
    const meanValue = mean([2, 4, 6, 8, 10]);
    expect(meanValue).toBe(6);
  });

  it('should return the mean of an array of numbers', () => {
    const meanValue = mean([5, 15, 25, 35, 45]);
    expect(meanValue).toBe(25);
  });
});