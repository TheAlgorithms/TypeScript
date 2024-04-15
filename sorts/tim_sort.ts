/**
 * Comparator function type definition.
 *
 * @typeparam T The type of elements being compared.
 */
type Comparator<T> = (a: T, b: T) => number

// Minimum size of subarrays to be sorted using insertion sort before merging
const MIN_MERGE = 32

/**
 * Performs insertion sort on a portion of an array.
 *
 * @typeparam T The type of elements in the array.
 * @param arr The array to sort.
 * @param startIndex The start index of the portion to sort.
 * @param endIndex The end index of the portion to sort.
 * @param compare The comparator function defining the order of elements.
 */
const insertionSort = <T>(
  arr: T[],
  startIndex: number,
  endIndex: number,
  compare: Comparator<T>
): void => {
  for (let i = startIndex + 1; i <= endIndex; i++) {
    const currentElement = arr[i]
    let j = i - 1

    while (j >= startIndex && compare(arr[j], currentElement) > 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentElement
  }
}

/**
 * Merges two sorted subarrays into one sorted array.
 *
 * @typeparam T The type of elements in the array.
 * @param arr The array containing the subarrays to merge.
 * @param leftIndex The left index of the first subarray.
 * @param middleIndex The middle index separating the two subarrays.
 * @param rightIndex The right index of the second subarray.
 * @param compare The comparator function defining the order of elements.
 */
const merge = <T>(
  arr: T[],
  leftIndex: number,
  middleIndex: number,
  rightIndex: number,
  compare: Comparator<T>
): void => {
  const leftArrayLength = middleIndex - leftIndex + 1
  const rightArrayLength = rightIndex - middleIndex

  const leftArray: T[] = arr.slice(leftIndex, middleIndex + 1)
  const rightArray: T[] = arr.slice(middleIndex + 1, rightIndex + 1)

  let leftPointer = 0
  let rightPointer = 0
  let mergedIndex = leftIndex

  while (leftPointer < leftArrayLength && rightPointer < rightArrayLength) {
    if (compare(leftArray[leftPointer], rightArray[rightPointer]) <= 0) {
      arr[mergedIndex++] = leftArray[leftPointer++]
    } else {
      arr[mergedIndex++] = rightArray[rightPointer++]
    }
  }

  while (leftPointer < leftArrayLength) {
    arr[mergedIndex++] = leftArray[leftPointer++]
  }

  while (rightPointer < rightArrayLength) {
    arr[mergedIndex++] = rightArray[rightPointer++]
  }
}

/**
 * Sorts an array using the Tim sort algorithm.
 *
 * @typeparam T The type of elements in the array.
 * @param arr The array to sort.
 * @param compare The comparator function defining the order of elements.
 */
export const timSort = <T>(arr: T[], compare: Comparator<T>): void => {
  const n = arr.length

  for (let i = 0; i < n; i += MIN_MERGE) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1), compare)
  }

  for (let size = MIN_MERGE; size < n; size *= 2) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1
      const right = Math.min(left + 2 * size - 1, n - 1)

      if (mid < right) {
        merge(arr, left, mid, right, compare)
      }
    }
  }
}
