import { isSquareFree } from '../is_square_free';

describe('isSquareFree', () => {
    test('should return correct boolean value', () => {
        expect(isSquareFree(1)).toBe(true);
        expect(isSquareFree(10)).toBe(true);
        expect(isSquareFree(20)).toBe(false);
        expect(isSquareFree(26)).toBe(true);
        expect(isSquareFree(48)).toBe(false);
    });
});