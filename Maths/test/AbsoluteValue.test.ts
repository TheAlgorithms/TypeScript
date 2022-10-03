import { AbsoluteValue } from "../AbsoluteValue";

describe("AbsoluteValue", () => {
  it("should return the absolute value of zero", () => {
    const absoluteValueOfZero = AbsoluteValue(0);
    expect(absoluteValueOfZero).toBe(0);
  });

  it("should return the absolute value of a negative integer", () => {
    const absoluteValueOfNegativeInteger = AbsoluteValue(-34);
    expect(absoluteValueOfNegativeInteger).toBe(34);
  });

  it("should return the absolute value of a positive integer", () => {
    const absoluteValueOfPositiveInteger = AbsoluteValue(50);
    expect(absoluteValueOfPositiveInteger).toBe(50);
  });

  it("should return the absolute value of a positive floating number", () => {
    const absoluteValueOfPositiveFloating = AbsoluteValue(20.2034);
    expect(absoluteValueOfPositiveFloating).toBe(20.2034);
  });

  it("should return the absolute value of a negative floating number", () => {
    const absoluteValueOfNegativeFloating = AbsoluteValue(-20.2034);
    expect(absoluteValueOfNegativeFloating).toBe(20.2034);
  });
});
