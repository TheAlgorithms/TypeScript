import { isSortedArray } from '../is_sorted_array';

describe('isSortedArray', () => {
	it('should return true for an array with one item', () => {
		expect(isSortedArray([100])).toEqual(true);
	});
	it('should return false for unsorted array', () => {
		expect(isSortedArray([9, 2, 3])).toEqual(false);
	});
	it('should return true for sorted array', () => {
		expect(isSortedArray([1, 2, 3])).toEqual(true);
	});
});
