/**
 * @function perfectSquare
 * @description the square root of a number should be an integer
 * @see [Perfect square](https://www.cuemath.com/algebra/perfect-squares/)
 * @example Perfect square - 9, 16, 25
 */


/**
 * @param {num} number 
 */

 export const PerfectSquare = (num : number) => {

    let squareRoot:number = Math.sqrt(num)

    return Number.isInteger(squareRoot)
}

