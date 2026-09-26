/**
 * @function sleepSort
 * @description For each n, sleep sort waits n milliseconds before pushing it to the result array.
 * @Complexity_Analysis
 * Space complexity - O(n)
 *                    Each element requires its own thread or timer instance,
 *                    which scales linearly with the size of the input array.
 *
 * Time complexity
 *      Best case   -   O(n + max(input))
 *                      Occurs when the OS schedules threads in linear time and
 *                      the maximum value in the input array is very small.
 *
 *      Worst case  -   unbounded
 *                      Occurs when at least one of the numbers is infinitely or
 *                      exponentially large, or when the system runs out of resources.
 *
 *      Average case -  O(n log n + max(input))
 *                      Occurs as the OS scheduler inserts the n wake-up timers into
 *                      an internal priority queue (min-heap), followed by the time
 *                      it takes for the maximum element to finish sleeping.
 *
 * @param {number[]} arr - The input array.
 * @return {number[]} - The sorted array.
 * @example sleepSort([8, 3, 5, 1, 4, 2]) = [1, 2, 3, 4, 5, 8]
 */
export async function sleepSort(arr: number[], scale = 10): Promise<number[]> {

  if (arr.length < 2) return arr

  const result: number[] = []

  const promises = arr.map(async num => {
    return new Promise<void>(resolve => setTimeout(() => {
      result.push(num)
      resolve()
    }, num * scale)) // Multiply the number by some scaling variable so the order stays correct
  })

  await Promise.all(promises)

  return result
}
