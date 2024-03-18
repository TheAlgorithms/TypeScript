/**
 * @generator
 * @description Generates ugly numbers
 * @summary Ugly numbers are natural numbers whose only prime factors are 2, 3 and 5.
 * They can be represented in the form 2^a * 3^b * 5*c. By convention, 1 is also considered to be
 * an ugly number.
 * The first few terms of the sequence are: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20...
 *
 * For the provided n, the nth ugly number shall be computed.
 * @see [GeeksForGeeks](https://www.geeksforgeeks.org/ugly-numbers/)
 */
function* uglyNumbers(): Generator<number, void, unknown> {
  yield 1

  let idx2 = 0,
    idx3 = 0,
    idx5 = 0
  const uglyNums = [1]

  let nextx2: number, nextx3: number, nextx5: number, nextUglyNum: number

  while (true) {
    nextx2 = uglyNums[idx2] * 2
    nextx3 = uglyNums[idx3] * 3
    nextx5 = uglyNums[idx5] * 5

    nextUglyNum = Math.min(nextx2, nextx3, nextx5)
    yield nextUglyNum

    if (nextx2 === nextUglyNum) idx2++
    if (nextx3 === nextUglyNum) idx3++
    if (nextx5 === nextUglyNum) idx5++

    uglyNums.push(nextUglyNum)
  }
}

export { uglyNumbers }
