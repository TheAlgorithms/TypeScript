/**
 * @function interpolationSearch
 * @description Interpolation search is an algorithm for searching for a
 *  key in an array that has been ordered by numerical values assigned
 *  to the keys (key values)
 * @param {number[]} array - list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or -1 if not found
 * @see https://en.wikipedia.org/wiki/Interpolation_search
 * @example interpolationSearch([1, 3, 5, 7, 9, 11], 1) => 0
 */
export const interpolationSearch = (
  array: number[],
  target: number
): number => {
  let lowIndex: number = 0
  let highIndex: number = array.length - 1
  let currentValue: number = array[lowIndex]
  let pos: number = 0

  while (lowIndex <= highIndex) {
    const lowValue: number = array[lowIndex]
    const highValue: number = array[highIndex]

    if (lowValue === highValue) {
      if (array[lowIndex] === target) {
        return lowIndex
      }
      break
    }

    pos = Math.round(
      lowIndex +
        ((target - lowValue) * (highIndex - lowIndex)) / (highValue - lowValue)
    )

    if (pos < 0 || pos >= array.length) {
      break
    }

    currentValue = array[pos]

    if (target === currentValue) {
      return pos
    }

    if (target > currentValue) {
      lowIndex = pos + 1
    } else {
      highIndex = pos - 1
    }
  }

  return -1
}
