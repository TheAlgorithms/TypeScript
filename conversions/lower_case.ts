/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @param {string}
 * @returns {string}
 */
export const toLowerCase = (str : string) : string => {
    let convertedString = '';
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (char >= 'A' && char <= 'Z') {
        convertedString += String.fromCharCode(char.charCodeAt(0) + 32);
      } else {
        convertedString += char;
      }
    }
    return convertedString;
}