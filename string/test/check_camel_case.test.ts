import { checkCamelCase } from "../check_camel_case"

describe('checkCamelCase', () => {
  
    it.each([
        ["docker_build",false],
        ["dockerBuild",true],
    ])('expects to return true if the input is in camel case format', (value,expected) => {
      expect(checkCamelCase(value)).toBe(expected)
    })
  })