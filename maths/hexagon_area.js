"use strict";
/**
 * @function hexArea
 * @description Returns area of a regular hexagon
 * @summary Finds the area of a regular hexagon (all 6 sides are equal lenght)
 * @param {Number} num - A number.
 * @return {number} The area of a regular hexagon
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Hexagon)
 * @example hexArea(1) =
 * @example hexArea(8) =
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexArea = void 0;
var hexArea = function (side) {
    if (side <= 0) {
        throw new TypeError('Invalid Input');
    }
    var area = ((3 * (Math.pow(3, (1 / 2))) / 2)) * (Math.pow(side, 2));
    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(area - Math.round(area)) < 0.000000000000001) {
        area = Math.round(area);
    }
    return area;
};
exports.hexArea = hexArea;
console.log((0, exports.hexArea)(2));
