/**
 * Given a number n pairs of parentheses, generate all combinations of valid parentheses
 * @param {number} n: Number of given parentheses
 * @return {string[]} result: Array that contains all valid parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n: number): string[] => {
  const result: string[] = []

  const solve = (
    chars: string,
    openParentheses: number,
    closedParentheses: number
  ) => {
    if (openParentheses === n && closedParentheses === n) {
      result.push(chars)
      return
    }

    if (openParentheses <= n) {
      solve(chars + '(', openParentheses + 1, closedParentheses)
    }

    if (closedParentheses < openParentheses) {
      solve(chars + ')', openParentheses, closedParentheses + 1)
    }
  }

  solve('', 0, 0)

  return result
}

export { generateParentheses }
