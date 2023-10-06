/**
 * @function sleepSort
 * @description Sleep Sort is a sorting algorithm that sorts an array of non-negative integers. It works by "sleeping" for a duration proportional to each element's value.
 * Elements with smaller values will "wake up" earlier and appear earlier in the sorted result.
 * @param {number[]} arr - The array of non-negative integers to be sorted. 
 * @returns {Promise<number[]>} - A Promise that resolves to the sorted array.
 * @see [Sleep Sort] (https://www.altcademy.com/blog/sleep-sort-not-practical-but-an-interesting-concept/#:~:text=Sleep%20sort%20is%20a%20sorting,element%20to%20the%20output%20array.)
 * @see [Sleep Sort] (https://www.geeksforgeeks.org/sleep-sort-king-laziness-sorting-sleeping/)
 * @example
 * const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
 * sleepSort(arr).then((result) => {
 *   console.log(result); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 * });
 * @Complexity_Analysis
 * Time Complexity: O(k * n)
 * - k is the maximum value in the input array.
 * - Sleeping for each element takes O(k) time, and there are n elements in the array.
 * - Therefore, the time complexity is O(k * n).
 *
 * Space Complexity: O(n)
 * - Additional space is required for the result array, which has n elements.
 * - The space complexity is O(n).
 */

/**
 * @description sleep function returns a Promise with a setTimeout enclosed.
 * @param {number} ms - Integer denoting the duration of setTimeout.
 * @returns - Returns nothing. Just resolves after a given duration.
 */

const sleep = (ms: number): Promise<undefined> => new Promise((resolve) => setTimeout(resolve, ms));

export const sleepSort = async (arr: number[]): Promise<number[]> => {
  const sortedArr: number[] = [];

  await Promise.all(
    arr.map(async (n: number) => {
      await sleep(n);
      sortedArr.push(n);
    })
  );

  return sortedArr;
};