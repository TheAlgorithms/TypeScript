import { areCoPrime } from '../check_co_prime'

describe('Check if two numbers are co-prime', () => {
  test('should return true if two numbers are co-prime', () => {
    expect(areCoPrime(14, 15)).toBeTruthy()
    expect(areCoPrime(8, 9)).toBeTruthy()
    expect(areCoPrime(3, -5)).toBeTruthy()
  })

  test('should return false if two numbers are not co-prime', () => {
    expect(areCoPrime(14, 21)).toBeFalsy()
    expect(areCoPrime(8, 12)).toBeFalsy()
    expect(areCoPrime(3, 6)).toBeFalsy()
  })

  test('should throw a TypeError if inputs are not integers', () => {
    expect(() => areCoPrime(14.5, 15)).toThrow(TypeError)
  })

  test('should throw an Error if inputs are zero', () => {
    expect(() => areCoPrime(0, 15)).toThrow(Error)
  })
})
