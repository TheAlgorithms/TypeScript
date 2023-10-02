/**
 * checkCamelCase function returns true if the string is in camelCase, else returns false.
 * @param varName The name of the variable to check.
 * @returns `true` if the string is in camelCase, `false` otherwise.
 * @throws {TypeError} If the input is not a string.
 */
export const checkCamelCase = (varName: string): boolean => /^[a-z][A-Za-z]*$/.test(varName);
  
  