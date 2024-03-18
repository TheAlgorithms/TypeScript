/**
 * @function findFactors
 * @description Find all the factors of a natural number.
 * @param {number} num - A natural number.
 * @return {Set<number>} - A set of all the factors of given natural number.
 * @see https://en.wikipedia.org/wiki/Divisor
 * @example findFactors(1) = [1]
 * @example findFactors(4) = [1,2,4]
 * @example findFactors(16) = [1,3,5,15]
 */
export const findFactors = (num: number): Set<number> => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error('Only natural numbers are supported.')
  }

  const res: Set<number> = new Set()
  // Iterates from 1 to square root of num & pushes factors into the res set.
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      res.add(i)

      const sqrtFactor = Math.floor(num / i)
      res.add(sqrtFactor)
    }
  }

  return res
}
