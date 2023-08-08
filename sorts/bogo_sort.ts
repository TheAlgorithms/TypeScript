import { isSortedArray } from "../other/is_sorted_array";
import { shuffleArray } from "../other/shuffle_array";

/**
 * @function bubbleSort
 * @description bogo sort is very simple to understand, it randomly shuffeles the input array until it is sorted
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(n)
 *                      The best case occurs when the array is already sorted.
 *      Worst case  -   unbounded
 *                      The worst case occurs when the suffeles never make the array sorted.
 *      Average case -  unbounded
 *                      The average case occurs when the suffeles never make the array sorted.
 *
 * @param {number[]} arr - The input array
 * @return {number[]} - The sorted array.
 * @see [Bogo Sort](https://en.wikipedia.org/wiki/Bogosort)
 * @example bogoSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */
export function bogoSort(arr: number[]): number[] {
	while (!isSortedArray(arr)) {
		shuffleArray(arr);
	}
	return arr;
}
