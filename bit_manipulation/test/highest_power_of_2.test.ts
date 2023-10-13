import { highestPowerOf2 } from "../highest_power_of_2";

describe("highestPowerOf2", () => {
  it.each([
    [10, 8],
    [16, 16],
    [4, 4],
    [1024, 1024],
    [1025, 1024],
  ])("Calculate the highest power of 2 <= %i", (number, expected) => {
    expect(highestPowerOf2(number)).toBe(expected);
  });
});
