import { fibonacciValue } from "../Fibonacci";

describe("FibonacciValue", () => {
  it("Should return correct value", () => {
    expect(fibonacciValue(0)).toEqual(0);
  });

  it("Should return correct value", () => {
    expect(fibonacciValue(1)).toEqual(1);
  });

  it("Should return correct value", () => {
    expect(fibonacciValue(5)).toEqual(5);
  });

  it("Should return correct value", () => {
    expect(fibonacciValue(10)).toEqual(55);
  });

  it("Should return correct value", () => {
    expect(fibonacciValue(4)).toEqual(3);
  });

  it("Should return correct value", () => {
    expect(fibonacciValue(6)).toEqual(8);
  });
});