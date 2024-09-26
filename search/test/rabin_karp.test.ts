import { rabinKarpSearch } from '../rabin_karp'

describe('Rabin-Karp Search', function () {
  it('should find the pattern in the text', function () {
    const text: string = 'ABABDABACDABABCABAB'
    const pattern: string = 'DAB'
    const expected: number[] = [4, 9]

    const result: number[] = rabinKarpSearch(text, pattern)
    expect(result).toEqual(expected)
  })

  it('should handle multiple occurrences of the pattern', function () {
    const text: string = 'ABABABABABAB'
    const pattern: string = 'ABAB'
    const expected: number[] = [2, 4, 6, 8]

    const result: number[] = rabinKarpSearch(text, pattern)
    expect(result).toEqual(expected)
  })

  it('should handle pattern not found', function () {
    const text: string = 'ABCD'
    const pattern: string = 'XYZ'
    const expected: number[] = []

    const result: number[] = rabinKarpSearch(text, pattern)
    expect(result).toEqual(expected)
  })
})
