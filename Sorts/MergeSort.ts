/**
 * @function mergeSort
 * @description keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted.
 * @see [Merge Sort](https://www.javatpoint.com/merge-sort)
 * @example MergeSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
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
}

export const merge = (low: number[], high: number[]): number[] => {
    let indexLow = 0;
    let indexHigh = 0;
    let lengthLow = low.length;
    let lengthHigh = high.length;
    let merged : number[] = [];
    while (indexLow < lengthLow || indexHigh < lengthHigh) {
        let lowItem = low[indexLow];
        let highItem = high[indexHigh];
        if (lowItem !== undefined) {
            if (highItem === undefined) {
                merged.push(lowItem);
                indexLow++;
            } else {
                if (lowItem <= highItem) {
                    merged.push(lowItem);
                    indexLow++;
                } else {
                    merged.push(highItem);
                    indexHigh++;
                }
            }
        } else {
            if (highItem !== undefined) {
                merged.push(highItem);
                indexHigh++;
            }
        }
    }
    return merged;
}