import { isSubsetSum } from "../subset_sum";

describe('isSubsetSum', () => {
    it('should return true if a subset with the given sum exists', () => {
      const set = [3, 34, 4, 12, 5, 2];
      const setLength = set.length;
      const sum = 9;
      const result = isSubsetSum(set, setLength, sum);
      expect(result).toBe(true);
    });
  
    it('should return false if no subset with the given sum exists', () => {
      const set = [3, 34, 4, 12, 5, 2];
      const setLength = set.length;
      const sum = 30;
      const result = isSubsetSum(set, setLength, sum);
      expect(result).toBe(false);
    });
  
    it('should return true when the sum is 0', () => {
      const set = [3, 34, 4, 12, 5, 2];
      const setLength = set.length;
      const sum = 0;
      const result = isSubsetSum(set, setLength, sum);
      expect(result).toBe(true);
    });
  
    it('should return false when the set is empty', () => {
      const set: number[] = [];
      const setLength = 0;
      const sum = 5;
      const result = isSubsetSum(set, setLength, sum);
      expect(result).toBe(false);
    });
  });
  