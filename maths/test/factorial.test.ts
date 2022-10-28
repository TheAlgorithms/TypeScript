import { Factorial } from "../factorial";

describe("Factorial", () => {
  test.each([-0.1, -1, -2, -42, 0.01, 0.42, 0.5, 1.337])(
    "should throw an error for non natural number %d",
    (num) => {
      expect(() => Factorial(num)).toThrowError(
        "only natural numbers are supported",
      );
    },
  );

  test.each([[1, 1], [3, 6], [5, 120], [10, 3628800]])(
    "of %i should be %i",
    (num, expected) => {
      expect(Factorial(num)).toBe(expected);
    },
  );

  test("of 1 should be 0 by definition", () => {
    expect(Factorial(0)).toBe(1);
  });
});
