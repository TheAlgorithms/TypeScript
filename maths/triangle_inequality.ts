/**
 * @function triIneq
 * @description Returns whether or not a triangle is valid based on the length of three sides
 * @summary The sum of two sides of a triangle is always greater than or equal the third side.
 * @param {number[]} numbers - Array of 3 natural numbers
 * @return {boolean} true if valid triangle, false otherwise
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Triangle_inequality)
 * @example aliquotSum([1, 2, 3]) = true
 * @example aliquotSum([4, 8, 16]) = false
 */

export const triIneq = (numbers: number[]): boolean => {
    if (numbers.length != 3) {
      throw new TypeError('Invalid Input')
    }
    for(let i=0; i < numbers.length; i++){
      if (numbers[i] <= 0) {
        throw new TypeError('Invalid Input')
      }
    }
  
    if (numbers[0] + numbers[1] < numbers[2]) {
        return false
    }
    if (numbers[2] + numbers[1] < numbers[0]) {
        return false
    }
    if (numbers[0] + numbers[2] < numbers[1]) {
        return false
    }
  
    return true;
  }
  