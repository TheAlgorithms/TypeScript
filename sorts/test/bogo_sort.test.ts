import { bogoSort } from '../bogo_sort';

describe('BubbleSort', () => {
	it('should return the correct values for test case 1', () => {
		expect(bogoSort([1])).toStrictEqual([1]);
	});
	it('should return the correct values for test case 2', () => {
		expect(bogoSort([2, 1])).toStrictEqual([1, 2]);
	});
	it('should return the correct values for test case 3', () => {
		expect(bogoSort([3, 1, 2])).toStrictEqual([1, 2, 3]);
	});
	it('should return the correct values for test case 4', () => {
		expect(bogoSort([3, 4, 1, 2])).toStrictEqual([1, 2, 3, 4]);
	});
});
