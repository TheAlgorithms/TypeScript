/**
 * @function binarySearch
 * @description binary search algorithm (iterative & recursive implementations) for a sorted array. 
 * 
 * The algorithm searches for a specific value in a sorted array in logarithmic time.
 * It repeatedly halves the portion of the list that could contain the item,
 * until you've narrowed down the possible indices to just one.
 * 
 * @param {number[]} array - sorted list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or -1 if not found
 * @see [BinarySearch](https://www.geeksforgeeks.org/binary-search/)
 * @example binarySearch([1,2,3], 2) => 1
 * @example binarySearch([4,5,6], 2) => -1
 */

export const binarySearchIterative = (array: number[], target: number): number => {
    if (array.length === 0) return -1;

    // declare pointers for the start, middle and end indices
    let start = 0;
    let end = array.length - 1;
    let middle: number;

    // declare found flag and 
    // position of a found target (-1 if not found)
    let position = -1;
    let found = false;
    
    // ensure the target is within the bounds of the array
    if (target < array[start] || target > array[end]) return -1;
    
    while(found === false && start <= end) {
        // assign middle value
        middle = Math.floor((start + end) / 2);

        if(array[middle] === target) {
            found = true;
            position = middle;
            return position;
        }
        
        if (target < array[middle])
            end = middle - 1;
        else 
            start = middle + 1;
    }
    // return the target position
    return position;
}

export const binarySearchRecursive = (array: number[], target: number, start = 0, end = array.length - 1): number => {
    if (array.length === 0) return -1;

    // ensure the target is within the bounds of the array
    if (target < array[start] || target > array[end]) return -1;

    const middle = (start + end) >> 1;

    if (array[middle] === target) return middle; // target found
    if (start > end) return -1; // target not found

    // if the target is less than the middle value, move the end pointer to be middle -1 to narrow the search space
    // otherwise, move the start pointer to be middle + 1 
    return target < array[middle]
        ? binarySearchRecursive(array, target, start, middle - 1)
        : binarySearchRecursive(array, target, middle + 1, end);
}