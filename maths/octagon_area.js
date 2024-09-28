"use strict";
/**
 * @function octArea
 * @description Returns area of a regular octagon
 * @summary Finds the area of a regular octagon (all 8 sides are equal lenght)
 * @param {Number} num - A natural number
 * @return {number} The area of a regular octagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Octagon)
 * @example hexArea(1) =
 * @example hexArea(8) =
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.octArea = void 0;
var octArea = function (side) {
    if (side <= 0) {
        throw new TypeError('Invalid Input');
    }
    var area = (2 * (1 + (Math.pow(2, (1 / 2))))) * (Math.pow(side, 2));
    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }
    return area;
};
exports.octArea = octArea;
