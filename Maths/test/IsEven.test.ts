import { IsEven } from "../IsEven";

describe("IsEven", () => {
  test.each([[2, true], [1, false], [0, true], [-1, false], [-2, true]])(
    "correct output for for %i",
    (nums, expected) => {
      expect(IsEven(nums)).toBe(expected);
    },
  );

  test("only whole numbers should be accepted", () => {
    expect(() => IsEven(0.5)).toThrowError(
      "only integers can be even or odd",
    );
  });
});