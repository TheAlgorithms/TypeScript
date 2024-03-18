import { squareRoot } from '../square_root'

describe('squareRoot', () => {
  test.each([-1, -10, -2.4])(
    'should throw an error for negative numbers',
    (n: number) => {
      expect(() => squareRoot(n)).toThrow('number must be non-negative number')
    }
  )

  test.each([0, 1, 4, 9, 16, 25])(
    'should return correct rational square root value for %i',
    (n: number) => {
      expect(squareRoot(n)).toBeCloseTo(Math.sqrt(n))
    }
  )

  test.each([2, 15, 20, 40, 99, 10032])(
    'should return correct irrational square root value %i',
    (n: number) => {
      expect(squareRoot(n)).toBeCloseTo(Math.sqrt(n))
    }
  )
})
