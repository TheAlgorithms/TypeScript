import { HexagonalNumbers } from '../hexagonal_numbers'

describe('HexagonalNumbers', () => {
  it('should return the first 10 hexagonal numbers', () => {
    expect(HexagonalNumbers(10)).toStrictEqual([
      1, 6, 15, 28, 45, 66, 91, 120, 153, 190
    ])
  })

  it('should return the first 5 hexagonal numbers', () => {
    expect(HexagonalNumbers(5)).toStrictEqual([1, 6, 15, 28, 45])
  })

  it('should return zero hexagonal numbers', () => {
    expect(HexagonalNumbers(0)).toStrictEqual([])
  })
})
