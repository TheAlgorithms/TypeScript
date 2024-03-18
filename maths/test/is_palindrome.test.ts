import { isPalindrome } from '../is_palindrome'

describe('isPalindrome', () => {
  test.each([
    [0, true],
    [1, true],
    [5, true],
    [1234, false],
    [12321, true],
    [31343, false],
    [-1, false],
    [-11, false],
    [10, false]
  ])('correct output for %i', (nums, expected) => {
    expect(isPalindrome(nums)).toBe(expected)
  })
})
