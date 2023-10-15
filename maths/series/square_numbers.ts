/**
 * @function SquareNumbers
 * @description To generate the requested number of square numbers
 * @summary  A square number or perfect square is an integer that is the square of an integer
 * In other words it is the product of some integer with itself.
 * The usual notation for the square of a number n is the equivalent exponentiation n^2
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Square_number)
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda> 
 * @param {number} n - The number of square numbers to generate
 * @returns {number[]} - An array containing first 'n' square numbers
 * @example SquareNumbers(7) = [ 1, 4, 9, 16, 25, 36, 49 ]
 * @example SquareNumbers(15) =  [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225 ]
 */
export const SquareNumbers = (n: number): number[] => {
    if (isNaN(n)) throw new Error('The input needs to be a number')
    if (!Number.isInteger(n) || n < 0) throw new Error('The input needs to be a non-negative integer')  
    return Array.from({ length: n }, (_, i) => (i + 1) ** 2);
}