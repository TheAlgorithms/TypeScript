/**
 * Solves a system of linear equations using Gaussian Elimination with partial pivoting.
 *
 * @param {number[][]} matrix - The augmented matrix representing the system of equations.
 * @returns {number[]} An array representing the solutions to the equations.
 */
export function gaussianElimination(matrix: number[][]): number[] {
  // Initialize the result array
  const result: number[] = new Array(matrix.length);

  /**
   * Perform partial pivoting on the matrix to improve numerical stability.
   */
  function partialPivot(): void {
    for (let row = 0; row < matrix.length; row++) {
      let pivotRow = row;
      // Find the row with the largest absolute value in the ith column
      for (let column = row + 1; column < matrix.length; column++) {
        if (Math.abs(matrix[column][row]) > Math.abs(matrix[pivotRow][row])) {
          pivotRow = column;
        }
      }
      // Swap rows if necessary to move the largest element to the pivot position
      if (pivotRow !== row) {
        for (let column = row; column <= matrix.length; column++) {
          [matrix[row][column], matrix[pivotRow][column]] = [
            matrix[pivotRow][column],
            matrix[row][column],
          ];
        }
      }
      // Perform Gaussian Elimination on the matrix
      for (let column = row + 1; column < matrix.length; column++) {
        const factor = matrix[column][row] / matrix[row][row];
        for (let k = row; k <= matrix.length; k++) {
          matrix[column][k] -= factor * matrix[row][k];
        }
      }
    }
  }

  /**
   * Perform back substitution on the matrix to find the solution vector.
   */
  function backSubstitute(): void {
    for (let row = matrix.length - 1; row >= 0; row--) {
      let sum = 0;
      for (let column = row + 1; column < matrix.length; column++) {
        sum += matrix[row][column] * result[column];
      }
      result[row] = (matrix[row][matrix.length] - sum) / matrix[row][row];
    }
  }

  // Perform partial pivoting and Gaussian Elimination
  partialPivot();
  backSubstitute();

  return result;
}
