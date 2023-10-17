import { SquareRoot } from "../square_root";

describe("SquareRoot", () => {
  test.each([-1, -10, -2.4])(
    "should throw an error for negative numbers",
    (n) => {
      expect(() => SquareRoot(n)).toThrow(
        "number must be non-negative number > 0"
      );
    }
  );

  test("should return correct square root value", () => {
    expect(SquareRoot(0)).toBe(0);
    expect(SquareRoot(1)).toBe(1);
    expect(SquareRoot(4)).toBe(2);
    expect(SquareRoot(9)).toBe(3);
    expect(SquareRoot(16)).toBe(4);
    expect(SquareRoot(25)).toBe(4);
  });
});
