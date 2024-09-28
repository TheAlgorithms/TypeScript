"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geometricMean = void 0;
/**
 * @function geometricMean
 * @description Returns the geometric mean of the provided array of numbers
 * @summary The geometric mean of an array of numbers a_1, a_2,..., a_n is given by (a_1 * a_2 * ... * a_n)^(1/n)
 * So, for example, the geometric mean of numbers 1, 2, 3, 4 is (1 * 2 * 3 * 4) ^ (1/4)
 * @param {number[]} numbers - Array of numeric values
 * @return {number} The aliquot sum of the number
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Geometric_mean)
 * @example aliquotSum([2, 8]) = 4
 * @example aliquotSum([4, 8, 16]) = 8
 */
var geometricMean = function (numbers) {
    if (numbers.length < 1) {
        throw new TypeError('Invalid Input');
    }
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            return 0;
        }
    }
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            throw new TypeError('Invalid Input');
        }
    }
    // This loop multiplies all values in the 'numbers' array using an array reducer
    var product = numbers.reduce(function (product, current) { return product * current; }, 1);
    // Divide product by the length of the 'numbers' array.
    var geo_mean = Math.pow(product, (1 / numbers.length));
    // Round to nearest integer if close enough due to imprecise float
    if (Math.abs(geo_mean - Math.round(geo_mean)) < 0.000000000000001) {
        geo_mean = Math.round(geo_mean);
    }
    return geo_mean;
};
exports.geometricMean = geometricMean;
console.log((0, exports.geometricMean)([2, 8]));
