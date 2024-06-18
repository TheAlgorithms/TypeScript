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

/**
 * Constants for the TimSort algorithm.
 */
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
 * Sorts an array using the TimSort algorithm.
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
   * Pushes a new run onto the stack of runs.
   *
   * @param runs The stack of runs.
   * @param start The starting index of the run.
   * @param length The length of the run.
   */
  const pushRun = (
    runs: { start: number; length: number }[],
    start: number,
    length: number
  ) => {
    runs.push({ start, length })
  }

  /**
   * Merges two adjacent runs in the stack of runs.
   *
   * @param runs The stack of runs.
   * @param i The index of the first run to merge.
   */
  const mergeAt = (runs: { start: number; length: number }[], i: number) => {
    const { start: start1, length: length1 } = runs[i]
    const { start: start2, length: length2 } = runs[i + 1]
    runs[i] = { start: start1, length: length1 + length2 }

    merge(
      arr,
      start1,
      start1 + length1 - 1,
      start1 + length1 + length2 - 1,
      compare
    )

    runs.splice(i + 1, 1)
  }

  /**
   * Forces the collapse of all remaining runs in the stack.
   *
   * @param runs The stack of runs.
   */
  const mergeForceCollapse = (runs: { start: number; length: number }[]) => {
    while (runs.length > 1) {
      let n = runs.length - 2
      if (n > 0 && runs[n - 1].length < runs[n + 1].length) {
        n--
      }
      mergeAt(runs, n)
    }
  }

  /**
   * Ensures the runs maintain the size invariant required by TimSort.
   *
   * @param runs The stack of runs.
   */
  const mergeCollapse = (runs: { start: number; length: number }[]) => {
    while (runs.length > 1) {
      let n = runs.length - 2

      if (n > 0 && runs[n - 1].length <= runs[n].length + runs[n + 1].length) {
        if (runs[n - 1].length < runs[n + 1].length) {
          n--
        }
        mergeAt(runs, n)
      } else if (runs[n].length <= runs[n + 1].length) {
        mergeAt(runs, n)
      } else {
        break
      }
    }
  }

  // Determine the minimum run length
  const minRun = minRunLength(length)
  let runs: { start: number; length: number }[] = []

  // Find runs and sort them
  let start = 0
  while (start < length) {
    let end = start + 1
    if (end < length && compare(arr[end - 1], arr[end]) <= 0) {
      // Ascending run
      while (end < length && compare(arr[end - 1], arr[end]) <= 0) {
        end++
      }
    } else {
      // Descending run
      while (end < length && compare(arr[end - 1], arr[end]) > 0) {
        end++
      }
      // Reverse descending run to make it ascending
      arr.slice(start, end).reverse()
    }

    findRunsAndSort(start, end - 1)
    pushRun(runs, start, end - start)

    mergeCollapse(runs)

    start = end
  }

  // Merge all remaining runs
  mergeForceCollapse(runs)
}
