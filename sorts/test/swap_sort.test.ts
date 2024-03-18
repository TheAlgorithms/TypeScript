import { minSwapsToSort } from '../swap_sort'

describe('SwapSort', () => {
  it.each([
    { input: [], expected: 0 },
    { input: [1, 2, 3, 4, 5, 6], expected: 0 },
    { input: [7, 6, 2, 5, 11, 0], expected: 2 },
    { input: [3, 3, 2, 1, 0], expected: 2 },
    { input: [3, 0, 2, 1, 9, 8, 7, 6], expected: 4 },
    { input: [1, 0, 14, 0, 8, 6, 8], expected: 3 }
  ])('should work for given input', ({ input, expected }) => {
    expect(minSwapsToSort(input)).toEqual(expected)
  })
})
