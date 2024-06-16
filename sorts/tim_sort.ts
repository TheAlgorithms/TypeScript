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
type Comparator<T> = (a: T, b: T) => number;

// Minimum size of subarrays to be sorted using insertion sort before merging
const MIN_MERGE = 32;

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
    const currentElement = arr[i];
    let j = i - 1;

    while (j >= startIndex && compare(arr[j], currentElement) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
};

/**
 * Merges two sorted subarrays into one sorted array.
 * This version of merge includes "galloping mode" for performance optimization.
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
  const leftArray = arr.slice(leftIndex, middleIndex + 1);
  const rightArray = arr.slice(middleIndex + 1, rightIndex + 1);

  let leftPointer = 0;
  let rightPointer = 0;
  let mergedIndex = leftIndex;

  while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
    if (compare(leftArray[leftPointer], rightArray[rightPointer]) <= 0) {
      arr[mergedIndex++] = leftArray[leftPointer++];
    } else {
      arr[mergedIndex++] = rightArray[rightPointer++];
    }
  }

  // Copy remaining elements from leftArray, if any
  while (leftPointer < leftArray.length) {
    arr[mergedIndex++] = leftArray[leftPointer++];
  }

  // Copy remaining elements from rightArray, if any
  while (rightPointer < rightArray.length) {
    arr[mergedIndex++] = rightArray[rightPointer++];
  }
};


/**
 * Sorts an array using the Tim sort algorithm.
 *
 * @typeparam T The type of elements in the array.
 * @param arr The array to sort.
 * @param compare The comparator function defining the order of elements.
 */
export const timSort = <T>(arr: T[], compare: Comparator<T>): void => {
  const n = arr.length;

  /**
   * Reverses a portion of the array.
   *
   * @param start The starting index of the portion to reverse.
   * @param end The ending index of the portion to reverse.
   */
  const reverseRange = (start: number, end: number): void => {
    while (start < end) {
      const temp = arr[start];
      arr[start++] = arr[end];
      arr[end--] = temp;
    }
  };

  /**
   * Identifies runs and sorts them using insertion sort.
   *
   * @param start The starting index of the range to find runs.
   * @param end The ending index of the range to find runs.
   */
  const findRunsAndSort = (start: number, end: number): void => {
    for (let i = start + 1; i <= end; i++) {
      const currentElement = arr[i];
      let j = i - 1;

      while (j >= start && compare(arr[j], currentElement) > 0) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = currentElement;
    }
  };

  /**
   * Merges runs in the array.
   *
   * @param minRunLength The minimum length of a run.
   */
  const mergeRuns = (minRunLength: number): void => {
    for (let size = minRunLength; size < n; size *= 2) {
      for (let left = 0; left < n; left += 2 * size) {
        const mid = left + size - 1;
        const right = Math.min(left + 2 * size - 1, n - 1);

        if (mid < right) {
          merge(arr, left, mid, right, compare);
        }
      }
    }
  };

  /**
   * Handles descending runs in the array.
   */
  const handleDescendingRuns = (): void => {
    let stackSize = 0;
    const runStack: [number, number][] = [];

    // Push runs onto stack
    for (let i = 0; i < n; i++) {
      let runStart = i;
      while (i < n - 1 && compare(arr[i], arr[i + 1]) > 0) {
        i++;
      }
      if (runStart !== i) {
        runStack.push([runStart, i]);
      }
    }

    // Merge descending runs
    while (runStack.length > 1) {
      const [start1, end1] = runStack.pop()!;
      const [start2, end2] = runStack.pop()!;
      
      merge(arr, start2, end2, end1, compare);
      runStack.push([start2, end1]);
    }
  };

  // Find runs and sort them
  findRunsAndSort(0, n - 1);

  // Merge runs
  mergeRuns(MIN_MERGE);

  // Handle descending runs
  handleDescendingRuns();
};

