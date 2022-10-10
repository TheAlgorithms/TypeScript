const assert = (condition: boolean, message: string) => {
  if (!condition) throw Error(message);
};

/**
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param limit An integer _n_ > 1
 * @returns All prime numbers from 2 through {@linkcode limit}
 */
export function sieveOfEratosthenes(limit: number): number[] {
  assert(limit > 1, "limit should be an integer greater than 1");
  assert(Number.isInteger(limit), "limit should be an integer greater than 1");

  const maybePrime: boolean[] = new Array(limit + 1).fill(true);
  for (let i = 2; i * i <= limit; i++) {
    if (!maybePrime[i]) continue;
    for (let j = i * i; j <= limit; j += i) {
      maybePrime[j] = false;
    }
  }

  return maybePrime
    .reduce(
      (primes, isPrime, number) => (isPrime ? [...primes, number] : primes),
      [] as number[]
    )
    .slice(2);
}

/**
 * Generator that yields primes.
 *
 * Inspired by https://gist.github.com/e-nikolov/cd94db0de2a6b70da144124ae93a6458
 */
export function* primeGenerator() {
  type NumberGen = Generator<number, void, any>;

  function* filter(input: NumberGen, prime: number): NumberGen {
    while (true) {
      const { done, value } = input.next();
      if (done) break;
      if (value % prime !== 0) yield value;
    }
  }

  let chain: NumberGen = (function* () {
    let i = 2;
    while (true) yield i++;
  })();

  while (true) {
    const { done, value } = chain.next();
    if (done) break;
    yield value;
    chain = filter(chain, value);
  }
}
