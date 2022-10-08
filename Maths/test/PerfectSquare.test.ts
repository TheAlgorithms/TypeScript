import { PerfectSquare } from "../PerfectSquare";

/**
 * Test #1 - 16 expected - true actual - true
 * Test #2 - 12 expected - false actual - false
 */

describe("Perfect square", () => {
    it("pass the test#1", () => {
        expect(PerfectSquare(16)).toBe(true);
    })

    it("pass the test#2", () => {
        expect(PerfectSquare(12)).toBe(false);
    })

});