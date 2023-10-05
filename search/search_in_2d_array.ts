/**
 * Searches for a target value in a 2D matrix.
 *
 * @param matrix - The 2D matrix to search in.
 * @param target - The target value to find.
 * @returns True if the target value is found in the matrix; otherwise, false.
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
    let row: number = 0;
    let col: number = matrix[0].length - 1;
  
    while (row < matrix.length && col >= 0) {
      if (matrix[row][col] === target) {
        return true;
      }
  
      if (matrix[row][col] > target) {
        col--;
      } else {
        row++;
      }
    }
  
    return false;
  }
  