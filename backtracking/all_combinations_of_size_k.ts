/**
 * This generates an array of unique sub"sets" (represented by ascendingly sorted subarrays)
 * of size k out of n+1 numbers from 1 to n.
 *
 * By using a backtracking algorithm we can incrementally build sub"sets" while dropping candidates
 * that cannot contribute anymore to a valid solution.
 * Steps:
 * - From the starting number (i.e. "1") generate all combinations of k numbers.
 * - Once we got all combinations for the given number we can discard it (“backtracks”)
 *   and repeat the same process for the next number.
 */
export function generateCombinations(n: number, k: number): number[][] {
  const combinationsAcc: number[][] = []
  const currentCombination: number[] = []

  function generateAllCombos(
    n: number,
    k: number,
    startCursor: number
  ): number[][] {
    if (k === 0) {
      if (currentCombination.length > 0) {
        combinationsAcc.push(currentCombination.slice())
      }
      return combinationsAcc
    }

    const endCursor = n - k + 2
    for (let i = startCursor; i < endCursor; i++) {
      currentCombination.push(i)
      generateAllCombos(n, k - 1, i + 1)
      currentCombination.pop()
    }
    return combinationsAcc
  }

  return generateAllCombos(n, k, 1)
}
