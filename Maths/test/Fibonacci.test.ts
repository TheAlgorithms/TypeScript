import { fibonacciValue } from "../Fibonacci";

describe("FibonacciValue", () => {
  test("Test 1", () => {
    expect(fibonacciValue(0)).toEqual(0);
  });

  test("Test 2", () => {
    expect(fibonacciValue(1)).toEqual(1);
  });

  test("Test 3", () => {
    expect(fibonacciValue(5)).toEqual(5);
  });

  test("Test 4", () => {
    expect(fibonacciValue(4)).toEqual(3);
  });

  test("Test 5", () => {
    expect(fibonacciValue(6)).toEqual(8);
  });
});