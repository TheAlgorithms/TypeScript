/**
 * Replaces placeholders in a string with dynamic values.
 * Example : "Hello {name}, your age is {age}".
 * Output : "Hello John Doe, your age is 30."
 *
 * @param {string} inputString - The input string containing placeholders.
 * @param {Record<string, string>} replacements - An object mapping placeholder keys to their replacement values.
 * @returns {string} The input string with placeholders replaced by their corresponding values.
 */

export function interpolateString(inputString: string, replacements: Record<string, string>): string {
    /**
     * Regular expression for finding placeholders in the input string.
     * @type {RegExp}
     */
    const regex: RegExp = /\{([^}]+)\}/g;
  
    /**
     * The string with placeholders replaced by their corresponding values.
     * @type {string}
     */
    const replacedString: string = inputString.replace(regex, (match: string, key: string) => {
      if (replacements.hasOwnProperty(key)) {
        return replacements[key];
      } else {
        return match; 
      }
    });
  
    return replacedString;
  }
  
  