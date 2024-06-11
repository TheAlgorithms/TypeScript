/**
 * @function shellSort
 * @description Shell sort algorithm is the optimization for insertion sort algorithm.
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   Ω(n log(n))
 *      Worst case  -   O(n^2)
 *      Average case -  O(n log(n)^2)
 *
 * @param {T[]} arr - The input array
 * @return {T[]} - The sorted array.
 * @see [Shell Sort] (https://www.geeksforgeeks.org/shellsort/)
 * @example shellSort([4, 1, 8, 10, 3, 2, 5, 0, 7, 6, 9]) = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
export function shellSort<T>(arr: T[]): T[] {
  // start with the biggest gap, reduce gap twice on each step
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      const temp = arr[i]
      let j = i // index for compared element on the left side
      // shift larger elements down
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp // place i-th element at appropriate position
    }
  }
  return arr
}
