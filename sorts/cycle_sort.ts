/**
 * @function cycleSort
 * @description Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result.
 * @param {number[]}array - The input array
 * @return {number[]} - The sorted array.
 * @see [CycleSort] https://en.wikipedia.org/wiki/Cycle_sort
 * @example cycleSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const cycleSort = (array: number[]) => {
  for (let i: number = 0; i < array.length - 1; i++) {
    MoveCycle(array, i)
  }
  return array
}

function MoveCycle(array: number[], startIndex: number): void {
  let currentItem: number = array[startIndex]
  let nextChangeIndex: number =
    startIndex + CountSmallerItems(array, startIndex, currentItem)
  if (nextChangeIndex == startIndex) {
    return
  }

  nextChangeIndex = SkipDuplicates(array, nextChangeIndex, currentItem)

  let tmp: number = array[nextChangeIndex]
  array[nextChangeIndex] = currentItem
  currentItem = tmp

  while (nextChangeIndex != startIndex) {
    nextChangeIndex =
      startIndex + CountSmallerItems(array, startIndex, currentItem)
    nextChangeIndex = SkipDuplicates(array, nextChangeIndex, currentItem)

    tmp = array[nextChangeIndex]
    array[nextChangeIndex] = currentItem
    currentItem = tmp
  }
}

function CountSmallerItems(
  array: number[],
  startIndex: number,
  currentItem: number
): number {
  let elementsCount: number = 0

  for (let i: number = startIndex + 1; i < array.length; i++) {
    if (currentItem > array[i]) {
      elementsCount++
    }
  }

  return elementsCount
}

function SkipDuplicates(
  array: number[],
  currentPosition: number,
  currentItem: number
): number {
  while (array[currentPosition] == currentItem) {
    currentPosition++
  }

  return currentPosition
}
