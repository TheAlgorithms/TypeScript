import { quickSort } from "../quick_sort";

describe("Quick Sort", () => {
    it("should return the correct value for average case", () => {
        expect(quickSort([1, 4, 2, 5, 9, 6, 3, 8, 10, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("should return the correct value for worst case", () => {
      expect(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("should return the correct value for best case", () => {
      expect(quickSort([1, 4, 2, 9, 5, 7, 3, 8, 10, 6])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("should return the correct value for 1 element", () => {
      expect(quickSort([1])).toStrictEqual([1]);
    });

    it("should return the correct value for some negative elements", () => {
      expect(quickSort([3.14, 0, -2, 10])).toStrictEqual([-2, 0, 3.14, 10]);
    });
  });
