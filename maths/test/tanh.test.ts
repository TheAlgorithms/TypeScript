import { TanH } from "../tanh";

describe("tanh", () => {
  test.each([[0, 0], [1, 0.7615941559557649], [-1, -0.7615941559557649]])(
    "The hyperbolic tangent of %i is %f",
    (x, expected) => {
      expect(TanH(x)).toBeCloseTo(expected, 10);
    }
  );
});
