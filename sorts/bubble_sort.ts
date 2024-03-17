/**
 * @function bubbleSort
 * @description Bubble sort algorithm is simple and easy. In bubble sort every pair of adjacent value is compared and swap if the first value is greater than the second one. By this with every iteration the greatest value goes to the right side making it ascending order.This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(n^2)
 *                      The best case occurs when an array is already sorted.
 *      Worst case  -   O(n^2)
 *                      The worst case occurs when an array is reverse sorted.
 *      Average case -  O(n^2)
 *                      The average case occurs when an array is reverse sorted.
 *
 * @param {number[]} arr - The input array
 * @return {number[]} - The sorted array.
 * @see [Bubble Sort](https://www.freecodecamp.org/news/bubble-sort)
 * @example bubbleSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const bubbleSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //iterating till the 2nd last element of array
      if (arr[j] > arr[j + 1]) {
        //current indexed number > next indexed number
        const temp: number = arr[j] //swapping two numbers
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
