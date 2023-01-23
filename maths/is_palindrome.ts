/**
 * A function to see if a number is a Pallindrome
 * @param number The input integer
 * @return {boolean} True or False based on the integer
 * @example isPalindrome(12321) => true | isPalindrome(455) => false
 * @see https://en.wikipedia.org/wiki/Palindromic_number
 * @author FatimaChariwala <https://github.com/fatima-0000>
 */

export const IsPalindrome = (number: number): boolean => {
    let reverseString = "";
    let stringValue = number.toString();
    let length = stringValue.length - 1;
    for (let i = length; i >= 0; --i) {
        reverseString = reverseString + stringValue[i];
    }
    return stringValue == reverseString;
};