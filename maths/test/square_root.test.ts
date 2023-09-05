import { squareRoot } from "../square_root";

describe("Square Root Calculation", () => {
  describe("Valid Inputs", () => {
    test("Calculate square root of 4", () => {
      const result = squareRoot(4);
      expect(result).toBe(2);
    });

    test("Calculate square root of 9", () => {
      const result = squareRoot(9);
      expect(result).toBe(3);
    });

    test("Calculate square root of 0", () => {
      const result = squareRoot(0);
      expect(result).toBe(0);
    });
  });

  describe("Invalid Inputs", () => {
    test("Throw error for negative input", () => {
      expect(() => squareRoot(-1)).toThrow(
        "Input must be a non-negative number."
      );
    });

    test("Throw error for negative input (decimal)", () => {
      expect(() => squareRoot(-3.14)).toThrow(
        "Input must be a non-negative number."
      );
    });

    test("Throw error for NaN input", () => {
      expect(() => squareRoot(NaN)).toThrow(
        "Input must be a non-negative number."
      );
    });
  });
});
