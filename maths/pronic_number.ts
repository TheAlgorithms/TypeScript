/**
 * @function pronicNumber
 * @description Checks whether a given number is a pronic number or not
 * @summary Pronic numbers, or oblong numbers as they are often referred to as,
 * are numbers which are the product of two consecutive integers. That is,
 * they are numbers of the form n*(n+1)
 *
 * For example, 20 is a pronic number since 20 = 4 * 5
 * @param num The number to check for being pronic
 * @returns {boolean} Whether the number is pronic or not
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Pronic_number)
 * @example pronicNumber(20) = true
 * @example pronicNumber(30) = true
 * @example pronicNumber(49) = false
 */
const pronicNumber = (n: number) => {
  if (isNaN(n)) throw new Error('The input needs to be a number')
  if (!Number.isInteger(n) || n < 0)
    throw new Error('The input needs to be a non-negative integer')
  if (n === 0) return true

  return (
    !Number.isInteger(Math.sqrt(n)) &&
    Math.floor(Math.sqrt(n)) * Math.ceil(Math.sqrt(n)) === n
  )
}

export { pronicNumber }
