import { radixSort } from '../radix_sort';

describe('Radix Sort', () => {
  test('should sort an unsorted array', () => {
    expect(radixSort([170, 45, 75, 90, 2, 802, 24, 2, 66])).toEqual([
      2, 2, 24, 45, 66, 75, 90, 170, 802,
    ]);
  });

  test('should sort a single element array', () => {
    expect(radixSort([5])).toEqual([5]);
  });

  test('should sort an already sorted array', () => {
    expect(radixSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should sort a reverse sorted array', () => {
    expect(radixSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle empty array', () => {
    expect(radixSort([])).toEqual([]);
  });

  test('should sort array with duplicate elements', () => {
    expect(radixSort([3, 3, 1, 1, 2])).toEqual([1, 1, 2, 3, 3]);
  });
});
