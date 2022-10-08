import { Factorial } from '../Factorial';

describe('Factorial', () => {

  test.each([-0.1, -1, -2, -42])('should throw an error for numbers < 0 like %i', (num) => {
    expect(() => Factorial(num)).toThrowError("num must be >= 0");
  })

  test.each([0.01, 0.42, 0.5, 1.337])('should throw an error for numbers that are not integers like %i', (num) => {
    expect(() => Factorial(num)).toThrowError("only integers are supported");
  })

  test.each([[1, 1], [3, 6], [5, 120], [10, 3628800] ])('of %i should be %i', (num, expected) => {
    expect(Factorial(num)).toBe(expected);
  })

  test('of 1 should be 0 by definition', () => {
    expect(Factorial(0)).toBe(1);
  });

});
