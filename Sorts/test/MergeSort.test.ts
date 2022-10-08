import { MergeSort } from "../MergeSort";

/**
 * Space complexity - O(n)
 * Time complexity 
 *      Best case   -   O(nlogn)
 *      Worst case  -   O(nlogn)
 *      Average case -  O(nlogn)
 * 
 * Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
 * T(n) = 2T(n/2) + O(n) 
 * The solution of the above recurrence is O(nLogn).
 */

describe("Merge Sort", () => {
    it("should return the correct value", () => {
        expect(MergeSort([1, 4, 2, 5, 9, 6, 3, 8, 10, 7])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

  });