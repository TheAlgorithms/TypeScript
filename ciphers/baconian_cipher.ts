/**
 * In cryptography, Bacon's cipher or the Baconian cipher is a method of steganographic message encoding devised by Francis Bacon in 1605.
 * See [wiki](https://en.wikipedia.org/wiki/Bacon%27s_cipher)
 */

export class BaconianCipher {
  private baconianAlphabet: any = {
    A: "AAAAA",
    B: "AAAAB",
    C: "AAABA",
    D: "AAABB",
    E: "AABAA",
    F: "AABAB",
    G: "AABBA",
    H: "AABBB",
    I: "ABAAA",
    J: "ABAAB",
    K: "ABABA",
    L: "ABABB",
    M: "ABBAA",
    N: "ABBAB",
    O: "ABBBA",
    P: "ABBBB",
    Q: "BAAAA",
    R: "BAAAB",
    S: "BAABA",
    T: "BAABB",
    U: "BABAA",
    V: "BABAB",
    W: "BABBA",
    X: "BABBB",
    Y: "BBAAA",
    Z: "BBAAB",
    " ": " ",
  };

  /**
   * @function baconianEncode
   * @description - Encodes a message using baconian cipher
   * @param {string} message - Message to encode
   * @return {string} A string with the encoded message
   */
  baconianEncode = (message: string) => {
    message = message.toUpperCase();

    let result = "";

    message.split("").forEach((char) => {
      result += this.baconianAlphabet[char];
    });

    return result;
  };

  /**
   * @function baconianDecode
   * @description - Decoded a message encoded using baconian cipher
   * @param {string} message - Message to decode
   * @return {string} A string with the decoded message
   */
  baconianDecode = (message: string) => {
    if (!/^[AB ]+$/.test(message)) {
      throw new TypeError(
        'The encoded message should consist only of "A"s, "B"s and whitespaces'
      );
    }

    message = message.toUpperCase();

    let result = "";
    const messageArray = message.split(" ");

    messageArray.forEach((word, index) => {
      for (let i = 0; i < word.length; i += 5) {
        const letter = Object.keys(this.baconianAlphabet).find((key) => {
          return this.baconianAlphabet[key] === word.substring(i, i + 5);
        });

        if (letter) {
          result += letter;
        }
      }
      if (index < messageArray.length - 1) {
        result += " ";
      }
    });

    return result;
  };
}