import { isOdd } from "../is_odd";

describe("IsEven", () => {
  test.each([[2, false], [1, true], [0, false], [-1, true], [-2, false]])(
    "correct output for for %i",
    (nums, expected) => {
      expect(isOdd(nums)).toBe(expected);
    },
  );

});