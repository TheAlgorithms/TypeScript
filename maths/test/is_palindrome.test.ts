import { IsPalindrome } from "../is_palindrome";

describe("IsPalindrome", () => {
  test.each([[5, true], [1234, false], [12321, true], [32.23, true], [31343, false]])(
    "correct output for %i",
    (nums, expected) => {
        expect(IsPalindrome(nums)).toBe(expected);
      },
  );
});