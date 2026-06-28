/**
 * Adds two binary strings and returns the result as a binary string.
 *
 * @param firstBinaryNo - The first binary string (only "0" and "1").
 * @param secondBinaryNo - The second binary string (only "0" and "1").
 * @returns The binary sum of the input strings.
 *
 * @example
 * addBinary('101', '11') === '1000'
 */
export function addBinary(firstBinaryNo: string, secondBinaryNo: string): string {
  if (!/^[01]+$/.test(firstBinaryNo) || !/^[01]+$/.test(secondBinaryNo)) {
    throw new TypeError('Inputs must be non-empty binary strings containing only "0" or "1".')
  }

  let i = firstBinaryNo.length - 1
  let j = secondBinaryNo.length - 1
  const result: string[] = []
  let carry = 0

  while (i >= 0 || j >= 0) {
    let sum = carry
    if (i >= 0) sum += parseInt(firstBinaryNo.charAt(i), 10)
    if (j >= 0) sum += parseInt(secondBinaryNo.charAt(j), 10)

    result.push((sum % 2).toString())
    carry = Math.floor(sum / 2)
    i--
    j--
  }

  if (carry !== 0) result.push(carry.toString())

  return result.reverse().join('')
}