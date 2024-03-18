/**
 * @function findMin
 * @description Find the minimum in an array of numbers.
 * @param {Number[]} nums - An array of numbers.
 * @return {Number} - The minimum.
 * @see https://infinitbility.com/how-to-find-minimum-value-in-array-in-typescript/
 * @example findMin([1,2,3,4,5]) = 1
 * @example findMin([87,6,13,999]) = 6
 * @example findMin([0.8,0.2,0.3,0.5]) = 0.2
 * @example findMin([1,0.1,-1]) = -1
 */
export const findMin = (nums: number[]): number => {
  if (nums.length === 0) {
    throw new Error('array must have length of 1 or greater')
  }

  let minimumSeen: number = nums[0]
  for (const num of nums) {
    if (num < minimumSeen) {
      minimumSeen = num
    }
  }

  return minimumSeen
}
