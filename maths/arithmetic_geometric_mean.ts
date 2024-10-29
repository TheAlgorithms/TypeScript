/**
 * @function calculateArithmeticMean
 * @description Calculate the arithmetic mean of a list of numbers. Arithmetic mean is the sum of all the values divided by the number of values in the list. Valid for both positive and negative numbers.
 * @param {number[]} values - Array of numeric values
 * @returns {number} - arithmetic mean of input values
 * @throws {TypeError} - If the input is not an array
 * @throws {RangeError} - If the input array is empty
 * @see https://en.wikipedia.org/wiki/Arithmetic_mean
 * @example calculateArithmeticMean([1, 2, 4, 5]) = 3
 */

export const calculateArithmeticMean = (values: number[]) => {
  // Check if the input is an array
  if (Array.isArray(values) === false) {
    throw new TypeError('Invalid Input')
  }

  // Check if the array is empty
  if (values.length === 0) {
    throw new RangeError('Input array cannot be empty')
  }

  // Calculate the arithmetic mean
  const arithmeticMean =
    values.reduce((sum, current) => sum + current, 0) / values.length

  return arithmeticMean
}

/**
 * @function calculateGeometricMean
 * @description Calculate the geometric mean of list of numbers. It is the nth root of the product of n numbers. It is only valid for positive numbers.
 * @param {number[]} values - Array of numeric values
 * @returns {number} - geometric mean of input values
 * @throws {TypeError} - If the input is not an array
 * @throws {RangeError} - If the input array is empty
 * @see https://en.wikipedia.org/wiki/Geometric_mean
 * @example calculateGeometricMean([1, 2, 4, 5]) = 2.514866859365871
 */

export const calculateGeometricMean = (values: number[]) => {
  //check if input is an array
  if (Array.isArray(values) === false) {
    throw new TypeError('Invalid Input')
  }

  //check if the array is empty
  if (values.length === 0) {
    throw new RangeError('Input array cannot be empty')
  }

  //calculate the geometric mean
  const geometricMean = Math.pow(
    values.reduce((product, current) => product * current, 1),
    1 / values.length
  )

  return geometricMean
}
