import { ternarySearch } from '../ternary_search';

describe('Ternary Search', () => {
  test('should find the target element', () => {
    expect(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toBe(4);
  });

  test('should return -1 when target is not found', () => {
    expect(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
  });

  test('should find the first element', () => {
    expect(ternarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test('should find the last element', () => {
    expect(ternarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test('should handle single element array', () => {
    expect(ternarySearch([5], 5)).toBe(0);
  });

  test('should return -1 for single element array when target not found', () => {
    expect(ternarySearch([5], 3)).toBe(-1);
  });

  test('should handle empty array', () => {
    expect(ternarySearch([], 5)).toBe(-1);
  });

  test('should find element in array with duplicates', () => {
    const result = ternarySearch([1, 2, 2, 2, 3, 4, 5], 2);
    expect([1, 2, 3]).toContain(result);
  });
});
