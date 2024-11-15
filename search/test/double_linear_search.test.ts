import { doubleLinearSearch } from '../double_linear_search'

describe('Double Linear Search', () => {
  it('should return false if array is empty', () => {
    expect(doubleLinearSearch(23, [])).toBe(false)
  })

  it('should return false if target is not supplied', () => {
    expect(doubleLinearSearch(undefined, [55, 12, 91, 2, 18])).toBe(false)
  })

  it('should return false if target is not found', () => {
    expect(doubleLinearSearch(23, [55, 12, 91, 2, 18])).toBe(false)
  })

  it('should return true if target is found', () => {
    expect(doubleLinearSearch(2, [55, 12, 91, 2, 18])).toBe(true)
  })

  it('should return true when target is closer to the start', () => {
    expect(doubleLinearSearch(23, [55, 23, 91, 2, 18, 53, 12, 16])).toBe(true)
  })

  it('should return true if the target is closer to the end', () => {
    expect(doubleLinearSearch(2, [12, 15, 55, 12, 91, 2, 18])).toBe(true)
  })
})
