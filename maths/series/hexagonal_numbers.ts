/**
 * @function HexagonalNumbers
 * @description To generate the requested number of hexagonal numbers
 * @summary A hexagonal number, hₙ, is a figurate number which represents the number
 * of distinct dots in a pattern of dots consisting of the outlines of regular
 * hexagons with sides upto 'n' dots, when the hexagons are overlaid so that they share a common vertex
 *
 * The nth hexagonal number, hₙ, is calculated by the formula:
 * hₙ = n * (2n - 1)
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Hexagonal_number)
 * @see [OEIS](https://oeis.org/A000384)
 * @param {number} n - The number of Hexagonal numbers to generate
 * @returns {number[]} - An array containing first 'n' hexagonal numbers
 * @example HexagonalNumbers(10) = [ 1, 6, 15, 28, 45, 66, 91, 120, 153, 190 ]
 * @example HexagonalNumbers(15) =  [ 1, 6, 15, 28, 45, 66, 91, 120, 153, 190, 231, 276, 325, 378, 435 ]
 */
export const HexagonalNumbers = (n: number): number[] => {
  if (isNaN(n)) throw new Error('The input needs to be a number')
  if (!Number.isInteger(n) || n < 0)
    throw new Error('The input needs to be a non-negative integer')
  const hexagonalNumbers = []

  for (let i = 1; i <= n; i++) {
    hexagonalNumbers.push(i * (2 * i - 1))
  }

  return hexagonalNumbers
}
