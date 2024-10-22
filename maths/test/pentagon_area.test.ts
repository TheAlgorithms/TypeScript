import { pentArea } from '../pentagon_area'

describe('Tests for HexArea', () => {
  it('should be a function', () => {
    expect(typeof pentArea).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => pentArea(0)).toThrow()
  })

  it('should throw error for invalid input', () => {
    expect(() => pentArea(-1)).toThrow()
  })

  it('should return if pentagon area', () => {
    const pentFunction = pentArea(5)
    expect(pentFunction).toBe(43.01193501472417)
  })

  it('should return if pentagon area', () => {
    const pentFunction = pentArea(15)
    expect(pentFunction).toBe(387.10741513251753)
  })
})