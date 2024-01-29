/**
 * @function isPerfectNumbers
 * @abstract A function to determine, if a number is a perfect number
 * @param {number} n
 *
 * @example console.log(isPerfectNumbers(6)) => true
 * @example console.log(isPerfectNumbers(28)) => true
 * @example console.log(isPerfectNumbers(12))=> false
 */

export const isPerfectNumbers = (n: number): boolean => {
    if (n <= 0 || !Number.isInteger(n)) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum === n;
  };