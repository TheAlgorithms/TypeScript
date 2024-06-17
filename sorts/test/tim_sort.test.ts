import { timSort } from '../tim_sort';

describe('Tim Sort', () => {
  const testTimSort = (
    arr: number[],
    comparator: (a: number, b: number) => number
  ): void => {
    const originalArr = [...arr];
    timSort(arr, comparator);
    expect(arr).toEqual(originalArr.slice().sort(comparator));
  };

  const testComparator = (
    comparator: (a: number, b: number) => number
  ): void => {
    it('should return the sorted array for an empty array', () => {
      const arr: number[] = [];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for an array with one element', () => {
      const arr: number[] = [1];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for a small array', () => {
      const arr = [5, 3, 8, 1, 7];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for a medium array', () => {
      const arr = [1, 4, 2, 5, 9, 6, 3, 8, 10, 7, 12, 11];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for a large array', () => {
      const arr = Array.from({ length: 1000 }, () =>
        Math.floor(Math.random() * 1000)
      );
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for an array with duplicated elements', () => {
      const arr = [5, 3, 8, 1, 7, 3, 6, 4, 5, 8, 2, 1];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for an array with all identical elements', () => {
      const arr = Array(1000).fill(5);
      testTimSort(arr, comparator);
    });

    it('should return the reverse sorted array for an array sorted in descending order', () => {
      const arr = [5, 4, 3, 2, 1];
      testTimSort(arr, comparator);
    });
    
    it('should return the pre-sorted array for an array sorted in descending order', () => {
      const arr = [1, 2, 3, 4, 5];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for a very large array', () => {
      const arr = Array.from({ length: 100000 }, () =>
        Math.floor(Math.random() * 100000)
      );
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for an array with negative numbers', () => {
      const arr = [5, -3, 8, 1, -7, 0];
      testTimSort(arr, comparator);
    });

    it('should return the sorted array for an array with floating-point numbers', () => {
      const arr = [5.1, 3.3, 8.8, 1.2, 7.7];
      testTimSort(arr, comparator);
    });
  };

  describe('Sorting in increasing order', () => {
    testComparator((a, b) => a - b);
  });

  describe('Sorting in decreasing order', () => {
    testComparator((a, b) => b - a);
  });
});

