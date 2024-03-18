/**
 * @function heapsort
 * @description is a comparison-based sorting algorithm that uses a binary heap data structure to repeatedly select and remove the maximum (for max-heap) or minimum (for min-heap) element and place it at the end of the sorted array.
 * @see [Heap Sort](https://www.geeksforgeeks.org/heap-sort/)
 * @example MergeSort([7, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 7]
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(nlogn)
 *      Worst case  -   O(nlogn)
 *      Average case -  O(nlogn)
 */

// Function to perform the Heap Sort
export const HeapSort = (arr: number[]): number[] => {
  buildMaxHeap(arr)

  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, i)
  }

  return arr
}

// Function to build a max-heap from an array
function buildMaxHeap(arr: number[]): void {
  const n = arr.length

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, i, n)
  }
}

// Function to heapify a subtree rooted at a given index
function heapify(arr: number[], index: number, size: number): void {
  let largest = index
  const left = 2 * index + 1
  const right = 2 * index + 2

  if (left < size && arr[left] > arr[largest]) {
    largest = left
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest !== index) {
    swap(arr, index, largest)
    heapify(arr, largest, size)
  }
}

// Function to swap two elements in an array
function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
