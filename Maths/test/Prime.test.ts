import { primeGenerator, sieveOfEratosthenes } from "../Prime";

describe(sieveOfEratosthenes, () => {
  test.each([-1, 0, 1, 2.123, 1337.80085])(
    "should throw an error when given an invalid limit=%d",
    (invalidLimit) => {
      expect(() => sieveOfEratosthenes(invalidLimit)).toThrow();
    }
  );
  test.each([
    [2, [2]],
    [3, [2, 3]],
    [4, [2, 3]],
    [5, [2, 3, 5]],
    [6, [2, 3, 5]],
    [7, [2, 3, 5, 7]],
    [8, [2, 3, 5, 7]],
    [9, [2, 3, 5, 7]],
  ])(
    "should return the expected list of primes for limit=%i",
    (limit, expected) => {
      expect(sieveOfEratosthenes(limit)).toEqual(expected);
    }
  );
});

describe(primeGenerator, () => {
  it("should generate prime numbers", () => {
    const expectedPrimes = sieveOfEratosthenes(123);
    const primeGen = primeGenerator();
    for (const prime of expectedPrimes) {
      expect(primeGen.next().value).toBe(prime);
    }
  });
});
