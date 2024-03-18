/** * A function to get degrees from the radians
 * @param {number} radians - The input integer
 * @return {number} degrees of radians
 * @example radiansToDegrees(0.7853) => 45 | radiansTiDegrees(1.5708) => 90
 * @see https://en.m.wikipedia.org/wiki/Radian
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */

export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI
}
