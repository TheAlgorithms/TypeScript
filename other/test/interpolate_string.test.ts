import { interpolateString } from "../interpolate_string";

describe('interpolateString', () => {
    it('should replace placeholders in a string with dynamic values', () => {
      const originalString: string = "Hello {name}, your age is {age}.";
      const dynamicReplacements: Record<string, string> = {
        name: "John Doe",
        age: "30"
      };
  
      const updatedString: string = interpolateString(originalString, dynamicReplacements);
      expect(updatedString).toBe("Hello John Doe, your age is 30.");
    });
  
    it('should handle missing replacement values', () => {
      const originalString: string = "Hello {name}, your age is {age}.";
      const dynamicReplacements: Record<string, string> = {
        name: "Alice"
      };
  
      const updatedString: string = interpolateString(originalString, dynamicReplacements);
      expect(updatedString).toBe("Hello Alice, your age is {age}.");
    });
  
    it('should handle extra replacement values', () => {
      const originalString: string = "Hello {name}, your age is {age}.";
      const dynamicReplacements: Record<string, string> = {
        name: "Bob",
        age: "25",
        city: "New York"
      };
  
      const updatedString: string = interpolateString(originalString, dynamicReplacements);
      expect(updatedString).toBe("Hello Bob, your age is 25.");
    });
  
    it('should handle an empty input string', () => {
      const originalString: string = "";
      const dynamicReplacements: Record<string, string> = {
        name: "John",
        age: "30"
      };
  
      const updatedString: string = interpolateString(originalString, dynamicReplacements);
      expect(updatedString).toBe("");
    });
  
    it('should handle an empty replacements object', () => {
      const originalString: string = "Hello {name}, your age is {age}.";
      const dynamicReplacements: Record<string, string> = {};
  
      const updatedString: string = interpolateString(originalString, dynamicReplacements);
      expect(updatedString).toBe("Hello {name}, your age is {age}.");
    });
  });
  