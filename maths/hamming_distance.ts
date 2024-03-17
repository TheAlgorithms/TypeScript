/**
 * @function hammingDistance
 * @description Returns the Hamming distance between two strings of equal length
 * @summary The Hamming distance between two strings of equal length is the
 * number of positions at which the corresponding symbols are different. In other words,
 * it measures the minimum number of substitutions required, to change one string to the other
 * It is one of the several sring metrics, used fror measuring the edit distance between two sequences
 * and is named after the American mathematician Richard Hamming
 * @param str1 One of the strings to compare to the other
 * @param str2 One of the strings to compare to the other
 * @returns {number}
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Hamming_distance)
 * @example hammingDistance('happy', 'homie')
 */
const hammingDistance = (str1: string, str2: string) => {
  if (str1.length !== str2.length)
    throw new Error('Strings must of the same length.')

  let dist = 0

  for (let i = 0; i < str1.length; i++) if (str1[i] !== str2[i]) dist++

  return dist
}

export { hammingDistance }
