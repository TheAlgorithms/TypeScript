import { coinChange } from "../coin_change";

describe("coinChange", () => {
  const testCases = [
    { coins: [2, 3, 5], amount: 0, expected: 0 },
    { coins: [], amount: 100, expected: -1 },
    { coins: [2, 4, 5], amount: 12, expected: 3 },
    { coins: [5, 2, 3, 7, 6, 1, 12, 11, 9, 15], amount: 45, expected: 3 },
    { coins: [2], amount: 3, expected: -1 },
    { coins: [10], amount: 10, expected: 1 },
  ];

  it.each(testCases)(
    "should return %p for coins %p and amount %p",
    (testCases) => {
      expect(coinChange(testCases.coins, testCases.amount)).toBe(testCases.expected);
    }
  );
});
