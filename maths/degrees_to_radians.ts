/** * A function to get radians from the degrees
 * @param {number} degree - The input integer
 * @return {number} radians of degrees
 * @example degreesToRadians(45) => 0.7853 | degreesToRadians(90) => 1.5708
 * @see https://en.m.wikipedia.org/wiki/Radian
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */

export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180
}
