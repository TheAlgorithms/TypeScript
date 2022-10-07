/**
 * @function QuickSort
 * @description a comparison sorting algorithm that uses a divide and conquer strategy
 * @param {number[]} arr - array of integers
 * @return {number[]} arr - sorted array
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 * @example QuickSort([5, 4, 3, 2, 1]) = [1, 2, 3, 4, 5]
 * @example QuickSort([9, -4, 3, 6, 1]) = [-4, 1, 3, 6, 9]
 */
export const QuickSort = (arr: number[]): number[] => {
	const len = arr.length;

	if (len <= 1) {
		return arr;
	}
	const PIVOT = arr[0];
	const GREATER : number[] = [];
	const LESSER : number[] = [];

	for (let i = 1; i < len; i++) {
		if (arr[i] > PIVOT) {
			GREATER.push(arr[i]);
		} else {
			LESSER.push(arr[i]);
		}
	}

	const sorted = [...QuickSort(LESSER), PIVOT, ...QuickSort(GREATER)];
	return sorted;
}
