import { hexArea } from '../hexagon_area'

describe('Tests for HexArea', () => {
  it('should be a function', () => {
    expect(typeof hexArea).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => hexArea(0)).toThrow()
  })

  it('should throw error for invalid input', () => {
    expect(() => hexArea(-1)).toThrow()
  })

  it('should return if hexagon area', () => {
    const hexFunction = hexArea(3)
    expect(hexFunction).toBe(23.382685902179844)
  })

  it('should return if hexagon area', () => {
    const hexFunction = hexArea(10)
    expect(hexFunction).toBe(259.8076211353316)
  })
})