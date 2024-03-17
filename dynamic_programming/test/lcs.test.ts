import { longestCommonSubsequence } from '../lcs'

describe('longestCommonSubsequence', () => {
  it('should return the longest common subsequence', () => {
    expect(longestCommonSubsequence('ABCD', 'ACDF')).toBe('ACD')

    expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe('GTAB')

    expect(longestCommonSubsequence('abcdef', 'xyz')).toBe('')

    expect(longestCommonSubsequence('', '')).toBe('')
  })

  it('should handle cases with spaces and special characters', () => {
    expect(longestCommonSubsequence('A B C D', 'A C D E')).toBe('A C D')

    expect(longestCommonSubsequence('1234$%^', '!@#$%^')).toBe('$%^')
  })

  it('should handle cases with longer input strings', () => {
    expect(
      longestCommonSubsequence(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      )
    ).toBe('e iumoor it t oeetr ag li.')
  })
})
