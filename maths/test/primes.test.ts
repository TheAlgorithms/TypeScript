import { isPrime, primeGenerator, sieveOfEratosthenes } from '../primes'

describe(sieveOfEratosthenes, () => {
  test.each([-1, 0, 1, 2.123, 1337.80085])(
    'should throw an error when given an invalid limit=%d',
    (invalidLimit) => {
      expect(() => sieveOfEratosthenes(invalidLimit)).toThrow()
    }
  )
  test.each([
    [2, [2]],
    [3, [2, 3]],
    [4, [2, 3]],
    [5, [2, 3, 5]],
    [6, [2, 3, 5]],
    [7, [2, 3, 5, 7]],
    [8, [2, 3, 5, 7]],
    [9, [2, 3, 5, 7]]
  ])(
    'should return the expected list of primes for limit=%i',
    (limit, expected) => {
      expect(sieveOfEratosthenes(limit)).toEqual(expected)
    }
  )
})

describe(primeGenerator, () => {
  it('should generate prime numbers', () => {
    const primeGen = primeGenerator()
    for (let i = 0; i < 100; i++) {
      const prime = primeGen.next().value

      if (prime === undefined) {
        throw new Error('prime generator returned undefined')
      }

      expect(isPrime(prime)).toBe(true)
    }
  })
})

describe('IsPrime', () => {
  test.each([
    [1, false],
    [2, true],
    [3, true],
    [3 * 3, false],
    [13, true],
    [24, false]
  ])('correct output for %i', (nums, expected) => {
    expect(isPrime(nums)).toBe(expected)
  })

  test.each([-890, -5.56, -7, 0.73, 4.2, NaN, -Infinity, Infinity])(
    'should throw an error for non natural number %d',
    (num) => {
      expect(() => isPrime(num)).toThrowError(
        'only natural numbers are supported'
      )
    }
  )
})
