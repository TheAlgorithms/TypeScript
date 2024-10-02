/**
 * @function binaryExponent
 * @description Returns the power of a number A raised to the power of B with binary exponentiation
 * @summary Binary exponentiation calculatoes A^B in logarithmic time of B instead of linear time
 * @param {Number} num - An array of two natural numbers, [A, B], where A^B will be solved
 * @return {number} A^B
 * @see [Wikipedia](https://cp-algorithms.com/algebra/binary-exp.html)
 * @example binaryExponent([5, 2]) = 25
 * @example binaryExponent([10, 18]) = 1000000000000000000
 */

export const binaryExponent = (numbers: number[]): number => {
    // raise errors upon invalid inputs
    if (numbers.length != 2) {
        throw new TypeError('Invalid Input')
    }
    for(let i=0; i < numbers.length; i++){
        if (numbers[i] < 0 || !Number.isInteger(numbers[i])) {
            throw new TypeError('Invalid Input')
        }
    }
    
    // binary exponentiation algorithm
    // if B == 0
    if (numbers[1] === 0) {
        // A^0 = 1
        return 1;
    }
    let res = Math.pow(numbers[0], Math.floor(numbers[1] / 2));
    // if B is even or odd
    if (numbers[1] % 2 === 1) {
        return res * res * numbers[0];
    } 
    else {
        return res * res;
    }
  }
