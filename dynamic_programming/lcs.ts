/**
 * Find the Longest Common Subsequence (LCS) of two strings.
 * @param text1 - The first input string.
 * @param text2 - The second input string.
 * @returns The longest common subsequence as a string.
 */

export const longestCommonSubsequence = (
  text1: string,
  text2: string
): string => {
  const m = text1.length
  const n = text2.length

  // Create a 2D array to store the lengths of LCS
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  )

  // Fill in the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  // Reconstruct the LCS from the DP table
  let i = m
  let j = n
  const lcs: string[] = []
  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      lcs.unshift(text1[i - 1])
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--
    } else {
      j--
    }
  }

  return lcs.join('')
}
