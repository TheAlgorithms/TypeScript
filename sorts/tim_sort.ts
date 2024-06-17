/**
 * Comparator function type definition.
 *
 * @typeparam T The type of elements being compared.
 * @param a The first element to compare.
 * @param b The second element to compare.
 * @returns A negative value if `a` should come before `b`,
 *          a positive value if `a` should come after `b`,
 *          and zero if `a` and `b` are considered equal.
 */
type Comparator<T> = (a: T, b: T) => number

// Minimum size of subarrays to be sorted using insertion sort before merging
const MIN_MERGE = 32
const MIN_GALLOP = 7

/**
 * Merges two sorted subarrays into one sorted array with optimized galloping mode.
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

  // Create temporary arrays for the left and right subarrays
  const leftSubarray: T[] = arr.slice(leftIndex, middleIndex + 1)
  const rightSubarray: T[] = arr.slice(middleIndex + 1, rightIndex + 1)

  let leftPointer = 0
  let rightPointer = 0
  let mergedIndex = leftIndex

  // Merge the two subarrays back into the main array
  while (leftPointer < leftArrayLength && rightPointer < rightArrayLength) {
    if (compare(leftSubarray[leftPointer], rightSubarray[rightPointer]) <= 0) {
      arr[mergedIndex++] = leftSubarray[leftPointer++]
    } else {
      arr[mergedIndex++] = rightSubarray[rightPointer++]
    }

    // Implement galloping mode
    let numGallops = 0
    while (
      leftPointer < leftArrayLength &&
      rightPointer < rightArrayLength &&
      numGallops < MIN_GALLOP
    ) {
      if (
        compare(leftSubarray[leftPointer], rightSubarray[rightPointer]) <= 0
      ) {
        arr[mergedIndex++] = leftSubarray[leftPointer++]
      } else {
        arr[mergedIndex++] = rightSubarray[rightPointer++]
      }
      numGallops++
    }

    // Gallop left
    while (
      leftPointer < leftArrayLength &&
      compare(leftSubarray[leftPointer], rightSubarray[rightPointer]) <= 0
    ) {
      arr[mergedIndex++] = leftSubarray[leftPointer++]
    }

    // Gallop right
    while (
      rightPointer < rightArrayLength &&
      compare(rightSubarray[rightPointer], leftSubarray[leftPointer]) < 0
    ) {
      arr[mergedIndex++] = rightSubarray[rightPointer++]
    }
  }

  // Copy remaining elements from left subarray, if any
  while (leftPointer < leftArrayLength) {
    arr[mergedIndex++] = leftSubarray[leftPointer++]
  }

  // Copy remaining elements from right subarray, if any
  while (rightPointer < rightArrayLength) {
    arr[mergedIndex++] = rightSubarray[rightPointer++]
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
  const length = arr.length

  /**
   * Identifies runs and sorts them using insertion sort.
   *
   * @param start The starting index of the range to find runs.
   * @param end The ending index of the range to find runs.
   */
  const findRunsAndSort = (start: number, end: number): void => {
    for (let currIdx = start + 1; currIdx <= end; currIdx++) {
      const currentElement = arr[currIdx]
      let prevIdx = currIdx - 1

      while (prevIdx >= start && compare(arr[prevIdx], currentElement) > 0) {
        arr[prevIdx + 1] = arr[prevIdx]
        prevIdx--
      }
      arr[prevIdx + 1] = currentElement
    }
  }

  /**
   * Calculates the minimum run length.
   *
   * @param n The length of the array.
   * @returns The minimum run length.
   */
  const minRunLength = (n: number): number => {
    let r = 0
    while (n >= MIN_MERGE) {
      r |= n & 1
      n >>= 1
    }
    return n + r
  }

  /**
   * Merges runs in the array.
   *
   * @param minRunLength The minimum length of a run.
   */
  const mergeRuns = (minRunLength: number): void => {
    for (let size = minRunLength; size < length; size *= 2) {
      for (let left = 0; left < length; left += 2 * size) {
        const mid = Math.min(left + size - 1, length - 1)
        const right = Math.min(left + 2 * size - 1, length - 1)

        if (mid < right) {
          merge(arr, left, mid, right, compare)
        }
      }
    }
  }

  // Determine the minimum run length
  const minRun = minRunLength(length)

  // Find runs and sort them
  for (let i = 0; i < length; i += minRun) {
    findRunsAndSort(i, Math.min(i + minRun - 1, length - 1))
  }

  // Merge runs
  mergeRuns(minRun)
}
