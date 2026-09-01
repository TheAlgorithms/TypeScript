import { XORCipher } from '../xor_cipher'

describe('Testing XORCipher function', () => {
  it('passing a string & number as an argument', () => {
    expect(XORCipher('test', 32)).toBe('TEST')
    expect(XORCipher('TEST', 32)).toBe('test')
  })

  it('encrypts newline and other line-terminator characters', () => {
    // /./g without the s-flag skips \n, \r — Array.from handles them correctly
    expect(XORCipher('\n', 1)).toBe(String.fromCharCode(10 ^ 1))
    expect(XORCipher('\r', 1)).toBe(String.fromCharCode(13 ^ 1))
    expect(XORCipher('A\nB', 1)).toBe(
      String.fromCharCode(65 ^ 1) + String.fromCharCode(10 ^ 1) + String.fromCharCode(66 ^ 1)
    )
  })

  it('XORCipher is its own inverse', () => {
    expect(XORCipher(XORCipher('Hello\nWorld', 42), 42)).toBe('Hello\nWorld')
  })
})
