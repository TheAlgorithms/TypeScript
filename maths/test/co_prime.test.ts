import { coPrime } from '../co_prime'

describe('Tests for CoPrime', () => {
  it('should be a function', () => {
    expect(typeof coPrime).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => coPrime([1])).toThrow()
  })

  it('should throw error for invalid input (less than 1)', () => {
    expect(() => coPrime([1, -3])).toThrow()
  })

  it('should return if two numbers are coprimes', () => {
    const coPrimeFunction = coPrime([4, 8])
    expect(coPrimeFunction).toBe(false)
  })

  it('should return if two numbers are coprimes', () => {
    const coPrimeFunction = coPrime([9, 16])
    expect(coPrimeFunction).toBe(true)
  })
})