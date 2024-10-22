/**
 * @function coPrime
 * @description Determine if given two numbers have no common factor (are coprimes). The common factor cannot be 1 or itself.
 * @param {number} num - An array of two natural numbers (positive integers not including 0).
 * @return {boolean} - Whether the given two number are coprimes
 * @see https://en.wikipedia.org/wiki/Coprime_integers
 * @example isPrime(2, 3) = 0
 * @example isPrime(3, 6) = 2
 */
export const coPrime = (numbers: number[]): boolean => {
    // raise corresponding errors upon invalid inputs
    if (numbers.length != 2) {
        throw new TypeError('Invalid Input')
    }
    for(let i=0; i < numbers.length; i++){
        if (numbers[i] < 1 || !Number.isInteger(numbers[i])) {
            throw new TypeError('Invalid Input')
        }
    }
  
    // handle input being 1
    if (numbers[0] === 1 || numbers[1] === 1) return false
    
    let factors0 = []
    let factors1 = []

    // iterate from 2 to the square root of num to find a factor
    // add factors to arrays
    for (let i = 2; i <= Math.sqrt(numbers[0]); i++) {
      if (numbers[0] % i === 0) {
        factors0.push(i)
      }
    }
    for (let i = 2; i <= Math.sqrt(numbers[1]); i++) {
        if (numbers[1] % i === 0) {
          factors1.push(i)
        }
    }
    console.log(factors0)
    console.log(factors1)

    // check if same factors
    for (let i = 0; i <= factors0.length; i++) {
        if (factors1.includes(factors0[i])) {
            return false
        }
    }
  
    // if the entire loop runs without finding a similar factor, return true
    return true
  }
