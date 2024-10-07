/*
 * Problem Statement: Generate all distinct permutations of an array (all permutations should be in sorted order);
 *
 * What is permutations?
 * - Permutation means possible arrangements in a set (here it is an array);
 *
 * Reference to know more about permutations:
 * - https://www.britannica.com/science/permutation
 *
 */

const swap = <T>(arr: T[], i: number, j: number): T[] => {
  const newArray: T[] = [...arr]

  const temp: T = newArray[i]
  newArray[i] = newArray[j]
  newArray[j] = temp

  return newArray
}

const permutations = <T>(arr: T[]): T[][] => {
  const P: T[][] = []
  const permute = (arr: T[], low: number, high: number): T[][] => {
    if (low === high) {
      P.push([...arr])
      return P
    }
    for (let i = low; i <= high; i++) {
      arr = swap(arr, low, i)
      permute(arr, low + 1, high)
    }
    return P
  }
  return permute(arr, 0, arr.length - 1)
}

export { permutations }
