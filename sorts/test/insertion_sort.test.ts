import { insertionSort } from '../insertion_sort'

describe('Insertion Sort', () => {
  it('should return the correct value for average case', () => {
    expect(insertionSort([8, 3, 5, 1, 4, 2])).toStrictEqual([1, 2, 3, 4, 5, 8])
  })

  it('should return the correct value for worst case', () => {
    expect(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ])
  })

  it('should return the correct value for best case', () => {
    expect(insertionSort([1, 2, 3, 4, 5, 8])).toStrictEqual([1, 2, 3, 4, 5, 8])
  })
})
