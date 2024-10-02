/**
 * @function pentArea
 * @description Returns area of a regular pentagon
 * @summary Finds the area of a regular pentagon (all 5 sides are equal lenght)  
 * @param {Number} num - A natural number
 * @return {number} The area of a regular pentagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Pentagon)
 * @example pentArea(1) = 1.72048
 * @example pentArea(8) = 110.11055
 */

export const pentArea = (side: number): number => {
    if (side <= 0) {
      throw new TypeError('Invalid Input')
    }
  
    let area = (1/4) * ((5 * (5 + 2 * (5 ** (1/2)))) ** (1/2)) * (side ** 2)

    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }

    return area
  }