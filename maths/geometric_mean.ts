/**
 * @function geometricMean
 * @description Returns the geometric mean of the provided array of numbers
 * @summary The geometric mean of an array of numbers a_1, a_2,..., a_n is given by (a_1 * a_2 * ... * a_n)^(1/n)
 * So, for example, the geometric mean of numbers 1, 2, 3, 4 is (1 * 2 * 3 * 4) ^ (1/4)
 * @param {number[]} numbers - Array of numeric values
 * @return {number} The aliquot sum of the number
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Geometric_mean)
 * @example aliquotSum([2, 8]) = 4
 * @example aliquotSum([4, 8, 16]) = 8
 */
export const geometricMean = (numbers: number[]): number => {
  if (numbers.length < 1) {
    throw new TypeError('Invalid Input')
  }
  for(let i=0; i < numbers.length; i++){
    if (numbers[i] == 0) {
        return 0
    }
  }
  for(let i=0; i < numbers.length; i++){
    if (numbers[i] < 0) {
        throw new TypeError('Invalid Input')
    }
  }

  // This loop multiplies all values in the 'numbers' array using an array reducer
  const product = numbers.reduce((product, current) => product * current, 1)

  // Divide product by the length of the 'numbers' array.
  let geo_mean = product ** (1/numbers.length)

  // Round to nearest integer if close enough due to imprecise float
  if (Math.abs(geo_mean - Math.round(geo_mean)) < 0.000000000000001) {
    geo_mean = Math.round(geo_mean);
  }

  return geo_mean;
}