import { MergeSort } from "../MergeSort";

describe("Merge Sort", () => {
    it("generating array and comparing with sorted array", () => {
        let arrLen = 10;
        let inBuiltSortArr = Array.from(Array(arrLen)).map(x=>Math.random());
        let mergeSortArray = inBuiltSortArr;

        inBuiltSortArr.sort((a,b) => a-b);
        expect(MergeSort(mergeSortArray)).toStrictEqual(inBuiltSortArr);
    });
});