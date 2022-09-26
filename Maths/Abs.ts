/**
 * A function to get absolute value of given number
 * @param num The input integer
 * @return {number} Absolute value of `num`
 * @example abs(-10) => 10 | abs(50) => 50 | abs(0) => 0
 * @see https://en.wikipedia.org/wiki/Absolute_value
 */

 const abs = (num : number | string) : number => {
    const validNumber = +num // converted to number, also can use - Number(num)
  
    if (Number.isNaN(validNumber)) {
      throw new TypeError('Argument is NaN - Not a Number')
    }
  
    return validNumber < 0 ? -validNumber : validNumber // if number is less then zero mean negative then it converted to positive. i.e -> n = -2 = -(-2) = 2
  }
  
  export { abs }
  