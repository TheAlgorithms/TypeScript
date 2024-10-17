/**
 * Adds two binary strings and returns the result as a binary string.
 *
 * @param firstBinaryNo - The first binary string.
 * @param secondBinaryNo - The second binary string.
 * @returns The binary sum of the input strings.
 */
export function addBinary(
  firstBinaryNo: string,
  secondBinaryNo: string
): string {
  let lengthOfFirstNumber: number = firstBinaryNo.length - 1
  let lengthOfSecondNumber: number = secondBinaryNo.length - 1
  const solution: string[] = []
  let carry: number = 0

  while (lengthOfFirstNumber >= 0 || lengthOfSecondNumber >= 0) {
    let sum: number = carry
    if (lengthOfFirstNumber >= 0)
      sum += parseInt(firstBinaryNo.charAt(lengthOfFirstNumber))
    if (lengthOfSecondNumber >= 0)
      sum += parseInt(secondBinaryNo.charAt(lengthOfSecondNumber))
    solution.push((sum % 2).toString())
    carry = Math.floor(sum / 2)
    lengthOfFirstNumber--
    lengthOfSecondNumber--
  }

  // Function to convert BCD to Gray code
const bcdToGray = (bcd: string): string => {
    let gray = '';
    gray += bcd[0]; // The most significant bit remains the same

    for (let i = 1; i < bcd.length; i++) {
        gray += (bcd[i] === bcd[i - 1]) ? '0' : '1';
    }

    return gray;
};

// Function to convert decimal to BCD
const decimalToBCD = (decimal: number): string => {
    return decimal.toString().split('').map(num => {
        return parseInt(num).toString(2).padStart(4, '0'); // Convert to binary and pad with zeros
    }).join('');
};

// Example usage
const decimalNumber = 45;
const bcd = decimalToBCD(decimalNumber);
const grayCode = bcdToGray(bcd);

console.log(`Decimal: ${decimalNumber}`);
console.log(`BCD: ${bcd}`);
console.log(`Gray Code: ${grayCode}`);


  if (carry !== 0) solution.push(carry.toString())

  return solution.reverse().join('')
}
