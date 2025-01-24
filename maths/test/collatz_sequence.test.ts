import { collatzSequence } from '../collatz_sequence'

describe('collatzSequence', () => {
  test('should generate the correct Collatz sequence for n = 5', () => {
    const result = collatzSequence(5)
    expect(result).toEqual([5, 16, 8, 4, 2, 1])
  })

  test('should generate the correct Collatz sequence for n = 1', () => {
    const result = collatzSequence(1)
    expect(result).toEqual([1])
  })

  test('should handle large inputs correctly (n = 27)', () => {
    const result = collatzSequence(27)
    // The exact sequence for n = 27 is very long; check key parts
    expect(result[0]).toBe(27)
    expect(result[result.length - 1]).toBe(1)
    expect(result.length).toBeGreaterThan(100)
  })

  test('should throw an error for n = 0', () => {
    expect(() => collatzSequence(0)).toThrow(
      'Sequence only defined for positive integers.'
    )
  })

  test('should throw an error for negative inputs (n = -5)', () => {
    expect(() => collatzSequence(-5)).toThrow(
      'Sequence only defined for positive integers.'
    )
  })

  test('should throw an error for non-integer inputs (n = 5.5)', () => {
    expect(() => collatzSequence(5.5)).toThrow(
      'Sequence only defined for positive integers.'
    )
  })
})
