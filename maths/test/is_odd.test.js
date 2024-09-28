"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_odd_1 = require("../is_odd");
describe('isOdd', function () {
    test.each([
        [2, false],
        [1, true],
        [0, false],
        [-1, true],
        [-2, false]
    ])('correct output for for %i', function (nums, expected) {
        expect((0, is_odd_1.isOdd)(nums)).toBe(expected);
    });
    test('only whole numbers should be accepted', function () {
        expect(function () { return (0, is_odd_1.isOdd)(0.5); }).toThrowError('only integers can be even or odd');
    });
});
