/**
 * @function bubbleSort
 * @description bogo sort is very simple to understand, it randomly shuffeles the input array until it is sorted
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(1)
 *                      The best case occurs when the first shuufle sorts the array.
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
		for (var i = arr.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
	return arr;
}

function isSortedArray(arr: number[]): boolean {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] >= arr[i + 1]) {
			return false;
		}
	}
	return true;
}
