import { toUpperCase } from "../lower_to_upper_case";

describe('toLowerCase Function', () => {
    it.each([
        ['hello world', 'HELLO WORLD'],
        ['uppercase', 'UPPERCASE'],
        ['lowercase', 'LOWERCASE'],
        ['123', '123'],
        ['', ''],
    ])('converts "%s" to uppercase as "%s"', (input, expected) => {
      const result = toUpperCase(input);
      expect(result).toBe(expected);
    });
});