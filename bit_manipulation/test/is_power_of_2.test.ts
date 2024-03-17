import { isPowerOfTwo } from '../is_power_of_2'

describe('IsPowerOfTwo', () => {
  it.each([
    [0, false],
    [1, true],
    [4, true],
    [1024, true],
    [1025, false]
  ])('Check if %i is a power of 2 or not', (number, expected) => {
    expect(isPowerOfTwo(number)).toBe(expected)
  })
})
