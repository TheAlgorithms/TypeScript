import { XORCipher } from '../XORCipher';

describe('Testing XORCipher function', () => {
  it('passing a string & number as an argument', () => {
    expect(XORCipher('test', 32)).toBe('TEST');
    expect(XORCipher('TEST', 32)).toBe('test');
  });
});
