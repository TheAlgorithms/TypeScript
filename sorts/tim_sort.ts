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

  // Regular merge with galloping mode
  while (leftPointer < leftArrayLength && rightPointer < rightArrayLength) {
    let numGallops = 0

    // Galloping through the left subarray
    while (
      leftPointer < leftArrayLength &&
      numGallops < MIN_MERGE &&
      compare(leftSubarray[leftPointer], rightSubarray[rightPointer]) <= 0
    ) {
      arr[mergedIndex++] = leftSubarray[leftPointer++]
      numGallops++
    }

    // Galloping through the right subarray
    while (
      rightPointer < rightArrayLength &&
      numGallops < MIN_MERGE &&
      compare(rightSubarray[rightPointer], leftSubarray[leftPointer]) < 0
    ) {
      arr[mergedIndex++] = rightSubarray[rightPointer++]
      numGallops++
    }

    // Standard merge without galloping
    while (leftPointer < leftArrayLength && rightPointer < rightArrayLength) {
      if (
        compare(leftSubarray[leftPointer], rightSubarray[rightPointer]) <= 0
      ) {
        arr[mergedIndex++] = leftSubarray[leftPointer++]
      } else {
        arr[mergedIndex++] = rightSubarray[rightPointer++]
      }
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
   * Reverses a portion of the array.
   *
   * @param start The starting index of the portion to reverse.
   * @param end The ending index of the portion to reverse.
   */
  const reverseRange = (start: number, end: number): void => {
    while (start < end) {
      const temp = arr[start]
      arr[start++] = arr[end]
      arr[end--] = temp
    }
  }

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
   * Merges runs in the array.
   *
   * @param minRunLength The minimum length of a run.
   */
  const mergeRuns = (minRunLength: number): void => {
    for (let size = minRunLength; size < length; size *= 2) {
      for (let left = 0; left < length; left += 2 * size) {
        const mid = left + size - 1
        const right = Math.min(left + 2 * size - 1, length - 1)

        if (mid < right) {
          merge(arr, left, mid, right, compare)
        }
      }
    }
  }

  /**
   * Handles descending runs in the array.
   */
  const handleDescendingRuns = (): void => {
    let stackSize = 0
    const runStack: [number, number][] = []

    // Push runs onto stack
    for (let idx = 0; idx < length; idx++) {
      let runStart = idx
      while (idx < length - 1 && compare(arr[idx], arr[idx + 1]) > 0) {
        idx++
      }
      if (runStart !== idx) {
        runStack.push([runStart, idx])
      }
    }

    // Merge descending runs
    while (runStack.length > 1) {
      const [start1, end1] = runStack.pop()!
      const [start2, end2] = runStack.pop()!

      merge(arr, start2, end2, end1, compare)
      runStack.push([start2, end1])
    }
  }

  // Find runs and sort them
  findRunsAndSort(0, length - 1)

  // Merge runs
  mergeRuns(MIN_MERGE)

  // Handle descending runs
  handleDescendingRuns()
}
