import { arithmeticMean } from "../arithmetic_mean";

describe("arithmeticMean", () => {
  it("should return the arithmetic mean of an array of numbers", () => {
    expect(arithmeticMean([1, 2, 3, 4, 5])).toBe(3);
    expect(arithmeticMean([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });
  it("should return 0 if the array is empty", () => {
    expect(arithmeticMean([])).toBe(0);
  });
});
