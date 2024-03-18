import { HeapSort } from '../heap_sort'

describe('Heap Sort', () => {
  it('should return the correct value for average case', () => {
    expect(HeapSort([1, 4, 2, 5, 9, 6, 3, 8, 10, 7])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })

  it('should return the correct value for worst case', () => {
    expect(HeapSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })

  it('should return the correct value for best case', () => {
    expect(HeapSort([1, 4, 2, 9, 5, 7, 3, 8, 10, 6])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ])
  })
})
