import { isEven } from "../is_even";

describe("IsEven", () => {
  it.each([[2, true], [10, true], [0, true], [-1, false], [-2, true]])(
    "correct output for for %i",
    (nums, expected) => {
      expect(isEven(nums)).toBe(expected);
    },
  );
});