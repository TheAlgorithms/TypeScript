import { triIneq } from '../triangle_inequality'

describe('Tests for CoPrime', () => {
  it('should be a function', () => {
    expect(typeof triIneq).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => triIneq([1])).toThrow()
  })

  it('should throw error for invalid input (less than 1)', () => {
    expect(() => triIneq([1, -3, 4])).toThrow()
  })

  it('should return if valid triangle', () => {
    const meanFunction = triIneq([1, 2, 3])
    expect(meanFunction).toBe(true)
  })

  it('should return if valid triangle', () => {
    const meanFunction = triIneq([2, 9, 16])
    expect(meanFunction).toBe(false)
  })
})