/**
 * @function shellSort
 * @description In shell sort is the optimization for insertion sort algorithm.
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   Ω(n log(n))
 *      Worst case  -   O(n^2)
 *      Average case -  O(n log(n)^2)
 *
 * @param {T[]} arr - The input array
 * @return {Array<T>} - The sorted array.
 * @see [Shell Sort] (https://www.geeksforgeeks.org/shellsort/)
 * @example shellSort([4, 1, 8, 10, 3, 2, 5, 0, 7, 6, 9]) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

 export function shellSort<T>(arr: T[]): Array<T> {
    // start with the biggest gap
    // reduce gap twice on each step
    for(let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2) ) {
        for (let i = gap; i < arr.length; i++) {
            const temp = arr[i];
            // index for compared element on the left side
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                // swap the elements
                arr[j] = arr[j - gap];
                j-=gap;
            }
            arr[j] = temp;
        }
    }
    return arr;
}