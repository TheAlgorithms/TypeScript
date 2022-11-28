import { PerfectSquare } from "../perfect_square";

test("Check perfect square", () => {
    expect(PerfectSquare(16)).toBe(true);
    expect(PerfectSquare(12)).toBe(false);
    expect(PerfectSquare(19)).toBe(false);
    expect(PerfectSquare(25)).toBe(true);
    expect(PerfectSquare(42)).toBe(false);
});
