import { FindFactors } from "../factors";

describe("FindFactors", () => {
  test.each([-890, -5.56, -7, 0, 0.73, 4.2, NaN, -Infinity, Infinity])(
    "should throw an error for non natural number %d",
    (num) => {
      expect(() => FindFactors(num)).toThrowError(
        "only natural numbers are supported",
      );
    },
  );

  test.each([[1, [1]], [2, [1,2]], [4, [1,2,4]], [6, [1,2,3,6]], [16, [1,2,4,8,16]]])(
    "of %i should return the correct array of its factors",
    (num, expected) => {
      expect(FindFactors(num)).toStrictEqual(expected);
    },
  );
});