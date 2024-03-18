/**
 * @function selectionSort
 * @description Selection sort algorithm is simple and easy. In selection sort the smallest value is selected from the unsorted part and placed at the beginning. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(n^2)
 *                      The best case occurs when an array is already sorted.
 *      Worst case  -   O(n^2)
 *                      The worst case occurs when an array is reverse sorted.
 *      Average case -  O(n^2)
 *                      The average case occurs when an array is reverse sorted.
 *
 * @param {number[]} items - The input array
 * @return {number[]} - The sorted array.
 * @see [Selection Sort](https://www.javatpoint.com/selection-sort)
 * @example selectionSort([12, 29, 25, 8, 32, 17, 40]) = [8, 12, 17, 25, 29, 32, 40]
 */

export const selectionSort = (items: number[]) => {
  for (let i = 0; i < items.length; i++) {
    let min = i
    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j
      }
    }
    if (i !== min) {
      ;[items[i], items[min]] = [items[min], items[i]]
    }
  }
  return items
}
