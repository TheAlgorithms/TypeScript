import { toLowerCase, toUpperCase } from "../case_conversion";

describe('LowerCaseConversion', () => { 
    it.each([
        ['HELLO', 'hello'],
        ['UPPERCASE', 'uppercase'],
        ['LowerCaSe', 'lowercase'],
        ['123', '123'],
        ['', ''],
      ])('toLowerCase Function', (input, expected) => {
          expect(toLowerCase(input)).toBe(expected);
    });
})

describe('UpperCaseConversion' , () => {
    it.each([
        ['hello', 'HELLO'],
        ['UPPERCASE', 'UPPERCASE'],
        ['LowerCaSe', 'LOWERCASE'],
        ['123', '123'],
        ['', ''],
    ])('UpperCaseConversion', (input, expected) => {
        expect(toUpperCase(input)).toBe(expected);
    });
})
