/**
 * Function to covert a Decimal input to Binary
 * @param num Decimal input
 * @return Binary of `num`
 * @example BinaryConvert(12) => 1100 | BinaryConvert(12 + 2) => 1110
 * @see [BinaryConvert](https://www.programiz.com/javascript/examples/decimal-binary)
 * @author Owais28 <https://github.com/Owais28>
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
  