/**
 * @function calculateMedian
 * @description This script will find the meadian value of a array of numbers.
 * @param {number[]} numbers - Sorted array of numeric values
 * @return {number} - median of input numbers
 * @see [Median](https://en.wikipedia.org/wiki/Median)
 * @example calculateMedian([1, 2, 4, 5, 8]) = 4
 * @example calculateMedian([1, 2, 4, 5]) = 3
 */


export const calculateMedian = (numbers: number[]): number => {
  if (numbers.length < 1) {
    throw new TypeError("Invalid Input");
  }

  const totalNumbers = numbers.length;

  if (totalNumbers % 2 === 0){
    let index = (totalNumbers) / 2;
    return (sortedArray[index - 1] + sortedArray[index]) / 2;
  } else {
    let index = (totalNumbers + 1) / 2;
    return sortedArray[index - 1]; 
  }

};
