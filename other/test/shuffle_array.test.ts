import { shuffleArray } from '../shuffle_array';

describe('shuffleArray', () => {
	it('should not change the length of the array', () => {
		let arr = [1, 2, 3];
		shuffleArray(arr);
		expect(arr.length).toEqual(3);
	});
	it('should return an array with the same element but possibly with different order', () => {
		let arr = [1, 2, 3, 6, 78, 2];
		shuffleArray(arr);
		expect(
			arr.every((elem) => {
				return [1, 2, 3, 6, 78, 2].includes(elem);
			})
		).toEqual(true);
	});
});
