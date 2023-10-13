import { findNextPowerOf2 } from "../next_power_of_2";

describe("find next power of two", () => {
  test.each([
    [0, 2],
    [24, 32],
    [100, 128],
    [1000, 1024],
    [2048, 2048],
  ])("next power of two of %i is %i", (n, expected) => {
    expect(findNextPowerOf2(n)).toBe(expected);
  });
});
