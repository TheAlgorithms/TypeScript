/**
 * @function partition
 * @description is a helper function used in the QuickSelect algorithm to partition the array around a pivot element
 * @param {number[]} arr - The array to partition
 * @param {number} left - The left boundary of the partition range
 * @param {number} right - The right boundary of the partition range
 * @param {number} pivotIndex - The index of the pivot element
 * @returns {number} - The new index of the pivot element after partitioning
 */

function partition(arr: number[], left: number, right: number, pivotIndex: number): number {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
            storeIndex++;
        }
    }

    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    return storeIndex;
}

/**
 * @function quickSelect
 * @description is an algorithm based on the QuickSort approach that selects the kth smallest element from an array
 * @param {number[]} arr - The array from which to select the element
 * @param {number} left - The left boundary of the array or subarray to consider
 * @param {number} right - The right boundary of the array or subarray to consider
 * @param {number} k - The index representing the kth smallest element to find
 * @returns {number} - The kth smallest element from the array
 */

export function quickSelect(arr: number[], left: number, right: number, k: number): number {
    if (left === right) {
        return arr[left];
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotNewIndex = partition(arr, left, right, pivotIndex);

    if (k === pivotNewIndex) {
        return arr[k];
    } else if (k < pivotNewIndex) {
        return quickSelect(arr, left, pivotNewIndex - 1, k);
    } else {
        return quickSelect(arr, pivotNewIndex + 1, right, k);
    }
}


