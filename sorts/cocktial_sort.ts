/**
 * @author codeme254 (Dennis Otwoma)
 * @description
 * Cocktail sort is meant to be an improvement of the
 * bubble sort algorithm, it bubbles bigger elements
 * to the end of the list and once at the end of the list,
 * it bubbles smaller elements to the start of the list.
 * The algorithm keeps swapping elements until all the
 * elements are where they are supposed to be, if at any
 * given pass no swapping happens, it means the array is sorted.
 * @example
 * const array = [32, 87, 14, 57, 60, 2, 72, 90, 45, 30]
 * cocktailSort([32, 87, 14, 57, 60, 2, 72, 90, 45, 30])
 */

export const cocktailSort = (array: number[]): number[] => {
  if (array.length <= 0) return array
  let sortedLeft = 0
  let sortedRight = array.length - 1

  while (sortedLeft <= sortedRight) {
    let i = sortedLeft
    let swapHappened = false
    while (i < sortedRight) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapHappened = true
      }
      i += 1
    }

    // if no swap happened in the forward pass, it means the array is sorted
    if (swapHappened === false) return array

    swapHappened = false
    while (i > sortedLeft) {
      if (array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]]
        swapHappened = true
      }
      i -= 1
    }

    // if no swap happened in the backwards pass, it means the array is sorted
    if (swapHappened === false) return array

    sortedLeft += 1
    sortedRight -= 1
  }
  return array
}
