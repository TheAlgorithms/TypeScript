/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @function fibonacci
 * @description Fibonacci is the sum of previous two fibonacci numbers.
 * @param {number} n - The input number
 * @return {number} fibonacci of n.
 * @see
 */
export const fibonacci = (n: number): number => {
    let first = 0
    let second = 1
  
    for (let i = 1; i < n; i++) {
      const third = first + second
      first = second
      second = third
    }
  
    return n ? second : first
}
  