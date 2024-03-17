import { sieveOfEratosthenes } from '../sieve_of_eratosthenes'

describe('Sieve of Eratosthenes', () => {
  test.each([-2, 0.1, -0.01, 2.2])(
    'should throw a error for non natural number',
    (n) => {
      expect(() => sieveOfEratosthenes(n)).toThrow(
        'Only natural numbers are supported'
      )
    }
  )

  test.each([
    [5, [2, 3, 5]],
    [11, [2, 3, 5, 7, 11]],
    [30, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]]
  ])('of %i should be %o', (num, expected) => {
    expect(sieveOfEratosthenes(num)).toStrictEqual(expected)
  })
})
