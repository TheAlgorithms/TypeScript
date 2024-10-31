import { isolateDecimal } from '../decimal_isolation'

describe('isolateDecimal', () => {
  test('isolate the decimal part of a number', () => {
    expect(isolateDecimal(3.14)).toEqual({ integralPart: 3, decimalPart: 0.14 })
    expect(isolateDecimal(0.14)).toEqual({ integralPart: 0, decimalPart: 0.14 })
    expect(isolateDecimal(-3.14)).toEqual({
      integralPart: 3,
      decimalPart: 0.14
    })
  })

  test('throws an error when the input is not a number', () => {
    expect(() => isolateDecimal('3.14' as unknown as number)).toThrow(TypeError)
  })
})
