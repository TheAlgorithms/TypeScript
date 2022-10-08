import { MergeSort } from "../MergeSort";

describe("Merge Sort", () => {
    it("generating array with length 10 and comparing with sorted array", () => {
        let arrLen = 10;

        let inBuiltSortArr = Array<number>(arrLen)
        for (let i = 0; i < arrLen; i++) { inBuiltSortArr[i] = Math.random() }
        let mergeSortArray = inBuiltSortArr;

        inBuiltSortArr.sort((a, b) => a - b);
        expect(MergeSort(mergeSortArray)).toStrictEqual(inBuiltSortArr);
    });

    it("generating array with length 20000 and comparing with sorted array", () => {
        let arrLen = 20000;

        let inBuiltSortArr = Array<number>(arrLen)
        for (let i = 0; i < arrLen; i++) { inBuiltSortArr[i] = Math.random() }
        let mergeSortArray = inBuiltSortArr;

        inBuiltSortArr.sort((a, b) => a - b);
        expect(MergeSort(mergeSortArray)).toStrictEqual(inBuiltSortArr);
    });
});