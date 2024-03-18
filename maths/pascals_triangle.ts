/**
 * Pascal's Triangle is an array of binomial coefficients. It can be used for unwrapping terms like
 * (a + b)^5.
 * To construct Pascal's Triangle you add the numbers above the child entry together. Here are the first five rows:
 *     1
 *    1 1
 *   1 2 1
 *  1 3 3 1
 * 1 4 6 4 1
 *
 * Time Complexity: quadratic (O(n^2)).
 *
 * @param n The exponent / The index of the searched row.
 * @returns The nth row of Pascal's Triangle
 * @see https://en.wikipedia.org/wiki/Pascal's_triangle
 */
export const pascalsTriangle = (n: number): number[] => {
  const arr: number[][] = []
  for (let i: number = 0; i < n; i++) {
    if (i === 0) {
      arr.push([1])
      continue
    }

    const lastRow: number[] = arr[i - 1]
    const temp: number[] = []
    for (let j: number = 0; j < lastRow.length + 1; j++) {
      if (j === 0 || j === lastRow.length) {
        temp.push(1)
        continue
      }

      temp.push(lastRow[j - 1] + lastRow[j])
    }

    arr.push(temp)
  }

  return arr[arr.length - 1]
}
