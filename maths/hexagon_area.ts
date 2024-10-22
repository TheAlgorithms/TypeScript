/**
 * @function hexArea
 * @description Returns area of a regular hexagon
 * @summary Finds the area of a regular hexagon (all 6 sides are equal lenght)  
 * @param {Number} num - A natural number
 * @return {number} The area of a regular hexagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Hexagon)
 * @example hexArea(3) = 23.382685902179844
 * @example hexArea(10) = 259.8076211353316
 */

export const hexArea = (side: number): number => {
    if (side <= 0) {
      throw new TypeError('Invalid Input')
    }
  
    let area = ((3 * (3 ** (1/2)) / 2)) * (side ** 2)

    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }

    return area
  }


  