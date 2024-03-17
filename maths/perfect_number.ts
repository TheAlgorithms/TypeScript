/**
 * @function isPerfectNumber
 * @abstract A function to determine if a number is a perfect number
 * @param {number} n
 *
 * @example console.log(isPerfectNumber(6)) => true
 * @example console.log(isPerfectNumber(28)) => true
 * @example console.log(isPerfectNumber(12))=> false
 */

export const isPerfectNumber = (n: number): boolean => {
  if (n <= 0 || !Number.isInteger(n)) {
    return false
  }
  let sum = 1
  const sqrt = Math.sqrt(n)
  for (let i = 2; i < sqrt; i++) {
    if (n % i === 0) {
      sum += i + n / i
    }
  }
  if (sqrt === Math.floor(sqrt)) {
    sum += sqrt
  }

  return sum === n
}
