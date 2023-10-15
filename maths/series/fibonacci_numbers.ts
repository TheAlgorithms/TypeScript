/**
 * @function FibonacciNumbers
 * @description To generate the requested number of fibonacci numbers
 * @summary the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence)
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda> 
 * @param {number} n - The number of fibonacci numbers to generate
 * @returns {number[]} - An array containing first 'n' fibonacci numbers
 * @example fibonacciNumbers(7) = [ 0, 1, 1, 2, 3, 5, 8 ]
 * @example fibonacciNumbers(15) =  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ]
 */
export const FibonacciNumbers = (n: number): number[] => {
    if (isNaN(n)) throw new Error('The input needs to be a number')
    if (!Number.isInteger(n) || n < 0) throw new Error('The input needs to be a non-negative integer')  
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fibonacciNumbers: number[] = [0, 1];

    while (fibonacciNumbers.length < n) {
        const next = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2];
        fibonacciNumbers.push(next);
    }

    return fibonacciNumbers;
}