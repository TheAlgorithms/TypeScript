import { IsPrime } from "../is_prime";

describe("IsPrime", () => {
  test.each([[1, false], [2, true], [3, true], [13, true], [24, false]])(
    "correct output for for %i",
    (nums, expected) => {
      expect(IsPrime(nums)).toBe(expected);
    },
  );

  test.each([-890, -5.56, -7, 0.73, 4.2, NaN, -Infinity, Infinity])(
    "should throw an error for non natural number %d",
    (num) => {
      expect(() => IsPrime(num)).toThrowError(
        "only natural numbers are supported",
      );
    },
  );
});