/**
 * checkCamelCase function returns true if the string is in camelCase, else returns false.
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @param varName The name of the variable to check.
 * @returns `true` if the string is in camelCase, `false` otherwise.
 */
export const checkCamelCase = (varName: string): boolean => /^[a-z][A-Za-z]*$/.test(varName);
  
  
