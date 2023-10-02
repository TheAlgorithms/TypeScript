/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - The string to check for palindrome.
 * @returns {boolean} Returns true if the string is a palindrome, false otherwise.
 *
 * @example
 * const isPalindrome = checkPalindrome("racecar");
 * // return true
 *
 * const isNotPalindrome = checkPalindrome("hello");
 * // return false
 * 
 */
export const checkPalindrome = (str: string): boolean => str === [...str].reverse().join('')
  