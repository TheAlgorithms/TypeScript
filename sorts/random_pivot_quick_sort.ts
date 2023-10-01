/**
 * @function partition
 * @description Partitions an array by selecting a random pivot element.
 * @param {number[]} array - The array to partition.
 * @param {number} left - The left index of the subarray.
 * @param {number} right - The right index of the subarray.
 * @returns {number} - The index of the pivot element after partitioning.
 */
export const partition = (
    array: number[],
    left: number = 0,
    right: number = array.length - 1
): number => {
    // Select a random pivot element within the subarray.
    const randomPivot = array[Math.floor(Math.random() * (right - left + 1)) + left];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < randomPivot) {
            i++;
        }

        while (array[j] > randomPivot) {
            j--;
        }

        if (i <= j) {
            // Swap elements at indices i and j.
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return i;
};

/**
 * @function randomPivotQuickSort
 * @description Sorts an array using the Quick Sort algorithm with random pivoting.
 * @param {number[]} array - The array to sort.
 * @param {number} left - The left index of the subarray.
 * @param {number} right - The right index of the subarray.
 * @returns {number[]} - The sorted array.
 * @complexity_analysis
 * Time complexity:
 *      - Best case: O(n log n) : Similar to the normal Quick Sort, the best case occurs when the pivot chosen in each step divides the array into roughly equal halves.
 *      - Average case: O(n log n) : This is also similar to the normal Quick Sort, but with a different constant factor due to random pivot selection.
 *      - Worst case: O(n^2) : The worst case can still be O(n^2) if, by random chance, the pivot selections repeatedly lead to unbalanced partitions. 
 *                             However, the worst-case scenario is less likely to occur in practice compared to the normal Quick Sort because of the random pivot selection.
 * Space complexity: O(n log n)
 */
export const randomPivotQuickSort = (
    array: number[],
    left: number = 0,
    right: number = array.length - 1
): number[] => {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            randomPivotQuickSort(array, left, index - 1);
        }

        if (index < right) {
            randomPivotQuickSort(array, index, right);
        }
    }

    return array;
};
