/**
 * @function CubicNumbers
 * @description To generate the requested number of cubic numbers
 * @summary A cube of a number n is its third power, that is, the result of multiplying three instances of n together.
 * The cube of a number or any other mathematical expression is denoted by a superscript 3
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Cube_(algebra))
 * @param {number} n - The number of Cubic numbers to generate
 * @returns {number[]} - An array containing first 'n' cubic numbers
 * @example CubicNumbers(7) = [ 1, 8, 27, 64, 125, 216, 343 ]
 * @example CubicNumbers(15) =  [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375 ]
 */
export const CubicNumbers = (n: number): number[] => {
    if (isNaN(n)) throw new Error('The input needs to be a number')
    if (!Number.isInteger(n) || n < 0) throw new Error('The input needs to be a non-negative integer')
    const cubicNumbers: number[] = [];

    for (let i = 1; i <= n; i++) {
        cubicNumbers.push(i ** 3);
    }

    return cubicNumbers;
}