import { checkPalindrome } from "../check_palindrome";

describe('CheckPalindrome', () => { 
    it.each([
    ['madam',true],
    ['racecar',true],
    ['palindrome',false]
    ])('check %s is palindrome or not', (input, expected) => {
        expect(checkPalindrome(input)).toBe(expected);
    });
 })

