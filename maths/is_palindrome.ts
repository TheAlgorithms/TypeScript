/**
 * A function to see if a number is a Palindrome.
 *
 * @param number The input number.
 * @return {boolean} Wether the number is a Palindrome or not.
 * @example isPalindrome(12321) => true | isPalindrome(455) => false
 * @see https://en.wikipedia.org/wiki/Palindromic_number
 * @author FatimaChariwala <https://github.com/fatima-0000>
 */

export const IsPalindrome = (number: number): boolean => {
    const stringValue = number.toString();
    const length = stringValue.length - 1;

    for (let i = 0; i <= length; i++) {
        if (stringValue[i] !== stringValue[length - i]) {
            return false;
        }
    }

    return true;
};
