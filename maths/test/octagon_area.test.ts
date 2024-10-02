import { octArea } from '../octagon_area'

describe('Tests for HexArea', () => {
  it('should be a function', () => {
    expect(typeof octArea).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => octArea(0)).toThrow()
  })

  it('should throw error for invalid input', () => {
    expect(() => octArea(-1)).toThrow()
  })

  it('should return octagon area', () => {
    const octFunction = octArea(3)
    expect(octFunction).toBe(43.45584412271571)
  })

  it('should return if octagon area', () => {
    const octFunction = octArea(10)
    expect(octFunction).toBe(482.84271247461896)
  })
})