/**
 * @description Calculate the Euclidean distance between two vectors.
 * @param {number[]} vectorA - The first vector.
 * @param {number[]} vectorB - The second vector.
 * @return {number} - The Euclidean distance between the two vectors.
 * @throws Will throw an error if the vectors do not have the same dimensions.
 * @see https://en.wikipedia.org/wiki/Euclidean_distance
 * @example euclideanDistance([0, 0], [3, 4]) = 5
 * @example euclideanDistance([1, 2, 3], [4, 5, 6]) = 5.196
 */
export const euclideanDistance = (
  vectorA: number[],
  vectorB: number[]
): number => {
  if (vectorA.length !== vectorB.length) {
    throw new Error('Vectors must have the same dimensions')
  }

  let sum: number = 0
  for (let index: number = 0; index < vectorA.length; index++) {
    sum += (vectorA[index] - vectorB[index]) ** 2
  }

  return Math.sqrt(sum)
}
