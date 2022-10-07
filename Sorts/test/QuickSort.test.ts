import { QuickSort } from "../QuickSort";

describe("Quick Sort", () => {
    it("should sort all arrays correctly", () => {
        expect(QuickSort([4, 1, 3, 5, 6, 7, 2])).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
        expect(QuickSort([8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(QuickSort([8, 4, 10, 15, 9])).toStrictEqual([4, 8, 9, 10, 15]);
        expect(QuickSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });
});
