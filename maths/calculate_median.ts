/**
 * @function calculateMedian
 * @description This function will find the median value of an array of numbers.
 * @param {number[]} numbers Sorted array of numeric values.
 * @return {number} The median of input numbers.
 * @see https://en.wikipedia.org/wiki/Median
 * @example calculateMedian([1, 2, 4, 5, 8]) = 4
 * @example calculateMedian([1, 2, 4, 5]) = 3
 */

export const calculateMedian = (numbers: number[]): number => {
  if (numbers.length < 1) {
    throw new TypeError('Input array must contain at least one number.')
  }

  const totalNumbers = numbers.length

  if (totalNumbers % 2 === 0) {
    const index = totalNumbers / 2
    return (numbers[index - 1] + numbers[index]) / 2
  } else {
    const index = (totalNumbers + 1) / 2
    return numbers[index - 1]
  }
}
