/**
 * A function to see if a number is a palindrome.
 * Time Complexity: O(log(n))
 *
 * @param number The input number.
 * @return {boolean} Wether the number is a Palindrome or not.
 */
export const IsPalindrome = (number: number): boolean => {
    if (number < 0 || (number % 10 === 0 && number !== 0)) {
        return false;
    }

    let reversed: number = 0;
    while (number > reversed) {
        reversed = reversed * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    return number === reversed || number === Math.floor(reversed / 10);
};
