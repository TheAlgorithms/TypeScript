import { PerfectSquare } from "../PerfectSquare";

describe("Perfect square", () => {
  it("pass the test#1", () => {
    expect(PerfectSquare(16)).toBe(true);
  });

  it("pass the test#2", () => {
    expect(PerfectSquare(12)).toBe(false);
  });
});
