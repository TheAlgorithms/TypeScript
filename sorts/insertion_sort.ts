/**
 * @function insertionSort
 * @description simple sortion algorithm for a small number of elements. It compares the `key` element with the previous elements. If the previous elements are greater than the `key` element, then you move the previous element to the next position.
 * @param {number[]} num - The input array
 * @return {number[]} - The sorted array.
 * @see [Insertion Sort](https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c#insertion-sort)
 * @example insertionSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */

export const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }

  return arr
}
