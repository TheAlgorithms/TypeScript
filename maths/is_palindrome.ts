/**
 * A function to see if a number is a palindrome.
 * Note that if the reversed number is larger than MAX_SAFE_INTEGER, rounding errors may occur and the result may be incorrect.
 * Time Complexity: O(log(n))
 *
 * @param number The input number.
 * @return {boolean} Wether the number is a Palindrome or not.
 */
export const isPalindrome = (number: number): boolean => {
  if (number < 0 || (number % 10 === 0 && number !== 0)) {
    return false
  }

  let reversed: number = 0
  while (number > reversed) {
    reversed = reversed * 10 + (number % 10)
    number = Math.floor(number / 10)
  }

  return number === reversed || number === Math.floor(reversed / 10)
}
