import { XORCipher } from '../xor_cipher'

describe('Testing XORCipher function', () => {
  it('passing a string & number as an argument', () => {
    expect(XORCipher('test', 32)).toBe('TEST')
    expect(XORCipher('TEST', 32)).toBe('test')
  })

  it('XORs newline-class characters', () => {
    // '\n' (U+000A) char code 10 XOR 1 = 11
    expect(XORCipher('A\nB', 1)).toBe('@\x0bC')
    // '\r' (U+000D) char code 13 XOR 1 = 12
    expect(XORCipher('A\rB', 1)).toBe('@\x0cC')
    // '\u2028' line separator XOR 1
    expect(XORCipher('A\u2028B', 1)).toBe('@\u2029C')
  })
})
