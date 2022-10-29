import { IsOdd } from "../is_odd";

describe("IsOdd", () => {
  test.each([[2, false], [1, true], [0, false], [-1, true], [-2, false]])(
    "correct output for for %i",
    (nums, expected) => {
      expect(IsOdd(nums)).toBe(expected);
    },
  );

  test("only whole numbers should be accepted", () => {
    expect(() => IsOdd(0.5)).toThrowError(
      "only integers can be even or odd",
    );
  });
});