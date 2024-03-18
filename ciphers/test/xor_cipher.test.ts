import { XORCipher } from '../xor_cipher'

describe('Testing XORCipher function', () => {
  it('passing a string & number as an argument', () => {
    expect(XORCipher('test', 32)).toBe('TEST')
    expect(XORCipher('TEST', 32)).toBe('test')
  })
})
