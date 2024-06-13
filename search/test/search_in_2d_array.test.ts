import { searchMatrix } from "../search_in_2d_array";

describe('search in 2d matrix', () => {
  
    it('should return true when the target value exists in the matrix', () => {
      const matrix1 = [
        [1, 4, 7, 11],
        [2, 5, 8, 12],
        [3, 6, 9, 16],
        [10, 13, 14, 17]
      ];
      const target1 = 5;
      expect(searchMatrix(matrix1, target1)).toBe(true);
    });
  
    
    it('should return false when the target value does not exist in the matrix', () => {
      const matrix2 = [
        [1, 4, 7, 11],
        [2, 5, 8, 12],
        [3, 6, 9, 16],
        [10, 13, 14, 17]
      ];
      const target2 = 20;
      expect(searchMatrix(matrix2, target2)).toBe(false);
    });
  
    
    it('should return false when the matrix is empty', () => {
      const emptyMatrix : number[][] = [[]];
      const target3 = 5;
      expect(searchMatrix(emptyMatrix, target3)).toBe(false);
    });
  
   
    it('should return true when the target value is at the bottom-right corner of the matrix', () => {
      const matrix4 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const target4 = 9;
      expect(searchMatrix(matrix4, target4)).toBe(true);
    });
  });
  