/**
 * @function mergeSort
 * @description keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted.
 * @see [Merge Sort](https://www.javatpoint.com/merge-sort)
 * @example MergeSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 * @Complexity_Analysis
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

 export const MergeSort = (items: number[]): number[] => {
    var halfLength = Math.ceil(items.length / 2);
    var low = items.slice(0, halfLength);
    var high = items.slice(halfLength);
    if (halfLength > 1) {
        low = MergeSort(low);
        high = MergeSort(high);
    }
    return merge(low, high);
};

export const merge = (low: number[], high: number[]): number[] => {
    let indexLow = 0;
    let indexHigh = 0;
    let curIndex = 0;
    let merged = Array<number>(low.length + high.length);

    while (indexLow < low.length && indexHigh < high.length) {

        if (low[indexLow] <= high[indexHigh]) {
            merged[curIndex++] = low[indexLow];
            indexLow++;
        } else {
            merged[curIndex++] = high[indexHigh];
            indexHigh++;
        }
    }

    while (indexLow < low.length) {
        merged[curIndex++] = low[indexLow];
        indexLow++;
    }

    while (indexHigh < high.length) {
        merged[curIndex++] = high[indexHigh];
        indexHigh++;
    }
    return merged;
};
