import { isPalindrome } from "../is_palindrome";

describe("isPalindrome", () => {
  test.each([[5, true], [1234, false], [12321, true], [31343, false]])(
    "correct output for %i",
    (nums, expected) => {
        expect(isPalindrome(nums)).toBe(expected);
      },
  );
});