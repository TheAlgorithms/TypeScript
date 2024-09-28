"use strict";
/**
 * @function pentArea
 * @description Returns area of a regular pentagon
 * @summary Finds the area of a regular pentagon (all 5 sides are equal lenght)
 * @param {Number} num - A natural number
 * @return {number} The area of a regular pentagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Pentagon)
 * @example pentArea(1) =
 * @example pentArea(8) =
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.pentArea = void 0;
var pentArea = function (side) {
    if (side <= 0) {
        throw new TypeError('Invalid Input');
    }
    var area = (1 / 4) * (Math.pow((5 * (5 + 2 * (Math.pow(5, (1 / 2))))), (1 / 2))) * (Math.pow(side, 2));
    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }
    return area;
};
exports.pentArea = pentArea;
