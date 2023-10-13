import { isEven } from "../is_even";

describe("Is even", () => {
  it.each([
    [0, true],
    [1, false],
    [4, true],
    [1024, true],
    [1025, false],
  ])("Check if %i is even", (number, expected) => {
    expect(isEven(number)).toBe(expected);
  });
});
