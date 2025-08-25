/**
 * @function CaesarCipherEncrypt
 * @description - Encrypt using the Caesar Cipher
 * The Caesar Cipher is a kind of a substitution cipher.
 * Each character is shifted by a constant value that is defined as the key.
 * @param {string} str - string to be encrypted
 * @param {number} key - key value for encryption
 * @return {string} encrypted string
 */
export const CaesarCipherEncrypt = (str: string, key: number): string => {
  // We normalize the Shift value here to make sure that the key value always falls in the range of 0 to 25
  const normalizedShift: number = ((key % 26) + 26) % 26;

  return str.replace(/[a-z]/gi, (char: string) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode((char.charCodeAt(0) - base + normalizedShift) % 26 + base);
  })
}

/**
 * @function CaesarCipherDecrypt
 * @description - Decrypt using the Caesar Cipher
 * Each character is shifted back by a constant value that is defined as the key.
 * @param {string} str - string to be decrypted
 * @param {number} key - key value used for encryption
 * @return {string} decrypted string
 */
export const CaesarCipherDecrypt = (str: string, key: number): string => {
  const normalizedShift: number = ((key % 26) + 26) % 26;

  return str.replace(/[a-z]/gi, (char: string) => {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode((char.charCodeAt(0) - base - normalizedShift) % 26 + base);
  })
}
