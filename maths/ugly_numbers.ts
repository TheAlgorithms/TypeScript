/**
 * @function UglyNumbers
 * @description Returns the nth ugly number
 * @summary Ugly numbers are natural numbers whose only prime factors are 2, 3 and 5.
 * They can be represented in the form 2^a * 3^b * 5*c. By convention, 1 is also considered to be
 * an ugly number.
 * The first few terms of the sequence are: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20...
 * 
 * For the provided n, the nth ugly number shall be computed.
 * @param n The nth ugly number to find
 * @returns {number} The nth ugly number
 * @see [GeeksForGeeks](https://www.geeksforgeeks.org/ugly-numbers/)
 * @example UglyNumbers(1) = 1
 * @example UglyNumbers(7) = 8
 */
const UglyNumbers = (n: number) => {
  const uglyNums = [1];
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;
  let nextx2: number, nextx3: number, nextx5: number, nextNum: number;

  while (uglyNums.length < n) {
    nextx2 = uglyNums[idx2] * 2;
    nextx3 = uglyNums[idx3] * 3;
    nextx5 = uglyNums[idx5] * 5;
    nextNum = Math.min(nextx2, nextx3, nextx5);

    uglyNums.push(nextNum);

    if (nextx2 === nextNum) idx2++;
    if (nextx3 === nextNum) idx3++;
    if (nextx5 === nextNum) idx5++;
  }

  return uglyNums[n - 1];
}

export { UglyNumbers }