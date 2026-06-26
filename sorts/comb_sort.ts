/**
 * @function combSort
 * @description Comb sort improves on bubble sort by comparing elements separated by a gap that shrinks each pass (by a factor of ~1.3), removing small values stuck near the end ("turtles") much faster than bubble sort.
 * @param {number[]} arr - The input array
 * @return {number[]} - The sorted array.
 * @see [CombSort] https://en.wikipedia.org/wiki/Comb_sort
 * @example combSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const combSort = (arr: number[]): number[] => {
  const shrinkFactor = 1.3
  let gap = arr.length
  let isSorted = false

  while (!isSorted) {
    gap = Math.floor(gap / shrinkFactor)

    if (gap <= 1) {
      gap = 1
      isSorted = true
    }

    for (let i = 0; i + gap < arr.length; i++) {
      if (arr[i] > arr[i + gap]) {
        ;[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]
        isSorted = false
      }
    }
  }

  return arr
}
