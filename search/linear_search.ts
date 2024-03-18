/**
 * @function linearSearch
 * @description linear search is the simplest search possible in a array
 *  it has a linear cost, if the value is present in the array, then the index of the first occurence will be returned
 *  if it's not present, the return it will be -1
 * @param {number[]} array - list of numbers
 * @param {number} target - target number to search for
 * @return {number} - index of the target number in the list, or -1 if not found
 * @see https://en.wikipedia.org/wiki/Linear_search\
 * @example linearSearch([1,2,3,5], 3) => 2
 * @example linearSearch([1,5,6], 2) => -1
 */
export const linearSearch = (array: any[], target: any): number => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i
  }
  return -1
}
