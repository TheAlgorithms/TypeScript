/**
 * @function bucketSort
 * @description Bucket sort is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
 * Each bucket is then sorted either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
 * @complexity_analysis
 * Space Complexity - O(n + k)
 * Time Complexity - O(n + k)
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 * @see https://en.wikipedia.org/wiki/Bucket_sort
 * @example bucketSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 */

import { insertionSort } from "./insertion_sort";

export function bucketSort(arr: number[]): number[] {
  const buckets: number[][] = [];
  const sortedArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor(arr[i] / 10);
    if (buckets[bucketIndex]) {
      buckets[bucketIndex].push(arr[i]);
    } else {
      buckets[bucketIndex] = [arr[i]];
    }
  }

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i]) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }

  return sortedArray;
}
