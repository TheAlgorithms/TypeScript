import { eulerMethod } from './eulerMethod';

describe('eulerMethod', () => {
    it('should compute y for a linear function (x + y)', () => {
        const result = eulerMethod(0, 1, 0.1, 10, (x, y) => x + y);
        expect(result).toBeCloseTo(2.5937424601, 5);
    });

    it('should compute y for a multiplicative function (x * y)', () => {
        const result = eulerMethod(0, 1, 0.1, 10, (x, y) => x * y);
        expect(result).toBeCloseTo(1.7715614317, 5);
    });

    it('should return the initial value y0 when there are zero iterations', () => {
        const result = eulerMethod(0, 1, 0.1, 0, (x, y) => x + y);
        expect(result).toBe(1);
    });

    it('should return the correct value for a very small step size', () => {
        const result = eulerMethod(0, 1, 0.01, 100, (x, y) => x + y);
        expect(result).toBeCloseTo(2.7048138294, 5);
    });

    it('should return the correct value after one iteration', () => {
        const result = eulerMethod(0, 1, 0.1, 1, (x, y) => x + y);
        expect(result).toBeCloseTo(1.1, 5);
    });

    it('should return the initial value y0 when step size is zero', () => {
        const result = eulerMethod(0, 1, 0, 10, (x, y) => x + y);
        expect(result).toBe(1);
    });

    it('should return correct value for negative step size', () => {
        const result = eulerMethod(1, 1, -0.1, 10, (x, y) => x + y);
        expect(result).toBeCloseTo(0.3162798676, 5);
    });

    it('should throw an error when number of iterations is negative', () => {
        expect(() => eulerMethod(0, 1, 0.1, -5, (x, y) => x + y)).toThrow('Number of iterations must be non-negative');
    });

});
