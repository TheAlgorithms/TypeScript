/**
 * @function XORCipher
 * @description - Encrypt using an XOR cipher
 * The XOR cipher is a type of additive cipher.
 * Each character is bitwise XORed with the key.
 * We loop through the input string, XORing each
 * character with the key.
 * @param {string} str - string to be encrypted
 * @param {number} key - key for encryption
 * @return {string} encrypted string
 */
export const XORCipher = (str: string, key: number): string =>
  str.replace(/./g, (char: string) =>
    String.fromCharCode(char.charCodeAt(0) ^ key)
  )
