import { bisection } from '../bisection';

const f = (x: number): number => x * x - 2;
const g = (x: number): number => x * x * x - 4;

describe('Bisection Method with multiple functions', () => {
    
    test.each([
        [1, 2, Math.sqrt(2)],     
        [0, 2, Math.sqrt(2)],
    ])('should find the root of f(x) = x^2 - 2 in range (%i, %i)', (a, b, expected) => {
        const root = bisection(f, a, b, 1e-7, 100);
        expect(root).toBeCloseTo(expected, 6);
    });

    
    test.each([
        [1, 2, Math.cbrt(4)],     
        [1, 3, Math.cbrt(4)],     
    ])('should find the root of g(x) = x^3 - 4 in range (%i, %i)', (a, b, expected) => {
        const root = bisection(g, a, b, 1e-7, 100);
        expect(root).toBeCloseTo(expected, 6);
    });


    test('should throw error for invalid range', () => {
        expect(() => bisection(f, -1, 1, 1e-7, 100)).toThrow(
            'The function must have opposite signs at the endpoints a and b.'
        );
    });

});