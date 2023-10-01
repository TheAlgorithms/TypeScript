import { toLowerCase } from "../lower_case";

describe('toLowerCase Function', () => {
    it.each([
      ['Hello World', 'hello world'],
      ['UPPERCASE', 'uppercase'],
      ['lowercase', 'lowercase'],
      ['123', '123'],
      ['', ''],
    ])('converts "%s" to lowercase as "%s"', (input, expected) => {
      const result = toLowerCase(input);
      expect(result).toBe(expected);
    });
});