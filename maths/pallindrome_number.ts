/**
 * A function to see if a number is a Pallindrome
 * @param number The input integer
 * @return {boolean} True or False based on the integer
 * @example isPalindrome(12321) => true | isPalindrome(455) => false
 * @see https://en.wikipedia.org/wiki/Palindromic_number
 * @author FatimaChariwala <https://github.com/fatima-0000>
 */

export const isPalindrome = (number: number): boolean => {
    const stringValue = number.toString();
    length = stringValue.length - 1;
    for (let i = 0; i < length; ++i, --length) {
        if (stringValue[i] !== stringValue[length]) {
            return false;
        }
    }
    return true;
};