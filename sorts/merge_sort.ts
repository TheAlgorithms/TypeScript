/**
 * @function mergeSort
 * @description keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted.
 * @see [Merge Sort](https://www.javatpoint.com/merge-sort)
 * @example MergeSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 * @Complexity_Analysis
 * Space complexity - O(n)
 * Time complexity 
 *      Best case   -   O(nlogn)
 *      Worst case  -   O(nlogn)
 *      Average case -  O(nlogn)
 * 
 * Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 
 * T(n) = 2T(n/2) + O(n) 
 * The solution of the above recurrence is O(nLogn).
 */

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array.slice()

  const midIndex = Math.floor(array.length / 2)
  const leftArray = array.slice(0, midIndex)
  const rightArray = array.slice(midIndex, array.length)
  
  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge (array1: number[], array2: number[]): number[] {
  const result = []
  let index1 = 0
  let index2 = 0

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      result.push(array1[index1++])
    } else {
      result.push(array2[index2++])
    }
  }

  return result.concat(array1.slice(index1)).concat(array2.slice(index2))
}

