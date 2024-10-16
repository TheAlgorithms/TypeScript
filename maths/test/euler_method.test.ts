import { eulerMethod } from '../euler_method'

describe('eulerMethod', () => {
  it('should compute y for dy/dx = y with y(0) = 1 at x = 1', () => {
    const result = eulerMethod(0, 1, 0.1, 10, (x: number, y: number) => y)
    expect(result).toBeCloseTo(2.59374, 5)
  })

  it('should compute y for dy/dx = -2y with y(0) = 1 at x = 1', () => {
    const result = eulerMethod(0, 1, 0.1, 10, (x: number, y: number) => -2 * y)
    const expectedResult = 1 * Math.pow(0.8, 10)
    expect(result).toBeCloseTo(expectedResult, 5)
  })

  it('should compute y for dy/dx = x with y(0) = 0 at x = 1', () => {
    const result = eulerMethod(0, 0, 0.1, 10, (x: number, y: number) => x)
    expect(result).toBeCloseTo(0.45, 2)
  })

  it('should compute y for dy/dx = x + y with y(0) = 1 at x = 0.5', () => {
    const h = 0.1
    const n = 5
    const result = eulerMethod(0, 1, h, n, (x: number, y: number) => x + y)
    expect(result).toBeCloseTo(1.72102, 5)
  })

  it('should compute y for dy/dx = x^2 with y(0) = 0 at x = 1', () => {
    const result = eulerMethod(0, 0, 0.2, 5, (x: number, y: number) => x ** 2)
    expect(result).toBeCloseTo(0.24, 3)
  })

  it('should handle negative step size for dy/dx = y with y(1) = e', () => {
    const result = eulerMethod(
      1,
      Math.E,
      -0.001,
      1000,
      (x: number, y: number) => y
    )
    expect(result).toBeCloseTo(1, 2)
  })
})
