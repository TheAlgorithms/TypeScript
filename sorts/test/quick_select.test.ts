import { quickSelect } from "../quick_select";

describe("Quick Select", () => {

    it("should return the correct value for worst case", () => {
        const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        const k = 2; // kth smallest element

        expect(quickSelect(arr, 0, arr.length - 1, k)).toBe(3);
    });

    it("should return the correct value for best case", () => {
        const arr = [1, 4, 2, 9, 5, 7, 3, 8, 10, 6];
        const k = 5; // kth smallest element

        expect(quickSelect(arr, 0, arr.length - 1, k)).toBe(6);
    });
});
