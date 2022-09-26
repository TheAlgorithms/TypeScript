/**
 * A function to convert a Decimal to Binary
 * @param num a Decimal value
 * @return Binary of `num`
 * @example BinaryConvert(12) => 1100 | BinaryConvert(12 + 2) => 1110
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 */

 const BinaryConvert = (num : number) : number => {
    let power = 1
    let binary = 0
  
    while (num) {
      const rem = num % 2
      num = Math.floor(num / 2)
      binary = rem * power + binary
      power *= 10
    }
  
    return binary
  }
  
  export { BinaryConvert }
  