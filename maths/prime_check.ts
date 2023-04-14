/**
 * @function isPrime
 * @description program to check if a number is prime or not
 * @see [Prime Check](https://www.programiz.com/javascript/examples/prime-number)
 * @example Prime Number -> 5,7,11,13,17
 * @param {num} number
 */

function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  

const num: number = 17;
if (isPrime(num)) {
  console.log(`${num} is prime`);
} else {
  console.log(`${num} is not prime`);
}
