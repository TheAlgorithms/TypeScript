/**
 * Determines if there is a subset of the given set with a sum equal to the specified sum.
 *
 * @param set - An array of integers representing the input set of numbers.
 * @param setLength - The number of elements in the set.
 * @param sum - The target sum to be achieved by the subset.
 * @returns True if a subset with the specified sum exists; otherwise, false.
 */
export function isSubsetSum(set: number[], setLength: number, sum: number): boolean {
   
    const dp: boolean[][] = new Array(setLength + 1);

    for (let i = 0; i <= setLength; i++) {
      dp[i] = new Array(sum + 1).fill(false);
    }
    
    for (let i = 0; i <= setLength; i++) {
      dp[i][0] = true;
    }
    
    for (let i = 1; i <= setLength; i++) {
      for (let j = 1; j <= sum; j++) {
        if (set[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = dp[i - 1][j] || dp[i - 1][j - set[i - 1]];
        }
      }
    }
    
    return dp[setLength][sum];
  }
  