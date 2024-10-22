/**
 * @function octArea
 * @description Returns area of a regular octagon
 * @summary Finds the area of a regular octagon (all 8 sides are equal lenght)  
 * @param {Number} num - A natural number
 * @return {number} The area of a regular octagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Octagon)
 * @example octArea(3) = 43.45584412271571
 * @example octArea(10) = 482.84271247461896
 */

export const octArea = (side: number): number => {
    if (side <= 0) {
      throw new TypeError('Invalid Input')
    }
  
    let area = (2 * (1 + (2 ** (1/2)))) * (side ** 2)

    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }

    return area
  }