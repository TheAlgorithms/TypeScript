import { NumberOfDigits } from "../number_of_digits";

describe("NumberOfDigits", () => {
  test.each([-890, -5.56, -7, 0.73, 4.2, NaN, -Infinity, Infinity])(
    "should throw an error for non natural number %d",
    (num) => {
      expect(() => NumberOfDigits(num)).toThrowError(
        "only natural numbers are supported",
      );
    },
  );

  test.each([[0, 1], [1, 1], [18, 2], [549, 3], [7293, 4], [1234567890, 10]])(
    "of %i should be %i",
    (num, expected) => {
      expect(NumberOfDigits(num)).toBe(expected);
    },
  );
});
