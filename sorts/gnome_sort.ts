/**
 * @function GnomeSort
 * @description Gnome sort is a sort algorithm that moving an element to its proper place is accomplished by a series of swap
 * @param {number[]} arr - The input array
 * @return {number[]} - The sorted array.
 * @see [GnomeSort] https://en.wikipedia.org/wiki/Gnome_sort
 * @example gnomeSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const gnomeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr
  }

  let i: number = 1

  while (i < arr.length) {
    if (arr[i - 1] <= arr[i]) {
      i++ //increment index if sub-array[0:i] already sorted
    } else {
      ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]] //swapping two numbers
      i = Math.max(1, i - 1) //go back to the previous index to check the swapped number
    }
  }
  return arr
}
