/**
 * @description
 * Computes the determinant of the given matrix using elimination.
 * - Rounding errors may occur for some matrices.
 * - Only handles 6 decimal places. Rounds thereafter.
 * @Complexity_Analysis
 * Time complexity: O(n^3)
 * Space Complexity: O(n^2)
 * @param {number[][]} m - A square matrix (2D array)
 * @return {number} - The determinant
 * @example det([[1,1],[1,1]]) = 0
 */

function interchange(m: number[][], from: number, to: number): number[][] {
  ;[m[to], m[from]] = [m[from], m[to]]
  return m
}

function addition(
  m: number[][],
  from: number,
  to: number,
  c: number
): number[][] {
  m[to] = m[to].map((e, i) => e + c * m[from][i])
  return m
}

function diagProduct(m: number[][]): number {
  let product = 1
  for (let i = 0; i < m.length; i++) {
    product *= m[i][i]
  }
  return product
}

export function det(m: number[][]): number {
  if (m.some((r) => r.length != m.length)) {
    throw new Error('only square matrices can have determinants')
  }

  const decPlaces = 6
  const epsilon = 1e-6

  // track the number of applied interchange operations
  let appliedICs = 0
  for (let i = 0; i < m[0].length; i++) {
    // partial pivotting
    let idealPivot = null
    let maxValue = 0
    for (let j = i; j < m.length; j++) {
      if (Math.abs(m[j][i]) > maxValue) {
        maxValue = Math.abs(m[j][i])
        idealPivot = j
      }
    }
    if (idealPivot === null) {
      return 0
    }
    if (idealPivot != i) {
      m = interchange(m, i, idealPivot)
      appliedICs++
    }
    // eliminate entries under the pivot
    for (let j = i + 1; j < m.length; j++) {
      if (Math.abs(m[j][i]) > epsilon) {
        m = addition(m, i, j, -m[j][i] / m[i][i])
      }
    }
  }
  const result = diagProduct(m) * (-1) ** appliedICs
  return parseFloat(result.toFixed(decPlaces))
}
