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

  if (carry !== 0) solution.push(carry.toString())

  return solution.reverse().join('')
}
