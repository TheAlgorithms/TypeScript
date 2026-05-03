/**
 * @function radixSort
 * @description Radix sort is a non-comparative integer sorting algorithm that sorts numbers by processing digits.
 * It works by sorting elements digit by digit, starting from the least significant digit to the most significant digit.
 * This algorithm is efficient for sorting large numbers of integers with a fixed number of digits.
 * @Complexity_Analysis
 * Space complexity - O(n + k) where k is the range of input
 * Time complexity
 *      Best case   -   O(n * d)
 *                      where d is the number of digits
 *      Worst case  -   O(n * d)
 *                      where d is the number of digits
 *      Average case -  O(n * d)
 *                      where d is the number of digits
 *
 * @param {number[]} arr - The input array
 * @return {number[]} - The sorted array
 * @see [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort)
 * @example radixSort([170, 45, 75, 90, 2, 802, 24, 2, 66]) = [2, 2, 24, 45, 66, 75, 90, 170, 802]
 */

export function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  const max = Math.max(...arr);
  let exp = 1;

  while (max / exp > 0) {
    countingSortByDigit(arr, exp);
    exp *= 10;
  }

  return arr;
}

function countingSortByDigit(arr: number[], exp: number): void {
  const n = arr.length;
  const output: number[] = new Array(n);
  const count: number[] = new Array(10).fill(0);

  // Count occurrences of each digit
  for (let i = 0; i < n; i++) {
    const digit = Math.floor((arr[i] / exp) % 10);
    count[digit]++;
  }

  // Change count[i] so that count[i] contains actual position
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / exp) % 10);
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  // Copy the output array to arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
