/**
 * Given a number n pairs of parentheses, generate all combinations of valid parentheses
 * @param {number} n: Number of given parentheses
 * @return {string[]} result: Array that contains all valid parentheses
 * @see https://leetcode.com/problems/generate-parentheses/
 */

const generateParentheses = (n: number): string[] => {
  const result: string[] = [];

  const solve = (chars: string, openParenthese: number, closedParenthese: number) => {
    if (openParenthese === n && closedParenthese === n) {
      result.push(chars);
      return;
    }

    if (openParenthese <= n) {
      solve(chars + "(", openParenthese + 1, closedParenthese);
    }

    if (closedParenthese < openParenthese) {
      solve(chars + ")", openParenthese, closedParenthese + 1);
    }
  };

  solve("", 0, 0);

  return result;
};

export { generateParentheses };
