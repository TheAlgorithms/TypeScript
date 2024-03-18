import { QuickSelect } from '../quick_select'

describe('QuickSelect', () => {
  test('should return the kth smallest element in an array', () => {
    const array = [8, 3, 5, 1, 4, 2]
    expect(QuickSelect(array, 0)).toBe(1)
    expect(QuickSelect(array, 1)).toBe(2)
    expect(QuickSelect(array, 2)).toBe(3)
    expect(QuickSelect(array, 3)).toBe(4)
    expect(QuickSelect(array, 4)).toBe(5)
    expect(QuickSelect(array, 5)).toBe(8)
  })

  test('should work with arrays of size 1', () => {
    const array = [4]
    expect(QuickSelect(array, 0)).toBe(4)
  })

  test('should work with large arrays', () => {
    const array = Array.from({ length: 1000 }, (_, i) => i + 1)
    expect(QuickSelect(array, 499)).toBe(500)
  })

  test('should throw error when k is out of bounds', () => {
    const array = [8, 3, 5, 1, 4, 2]
    expect(() => QuickSelect(array, -1)).toThrow()
    expect(() => QuickSelect(array, 6)).toThrow()
  })
})
