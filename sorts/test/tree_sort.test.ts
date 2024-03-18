import { treeSort } from '../tree_sort'

describe('TreeSort (numbers)', () => {
  it.each([
    { input: [], expected: [] },
    { input: [1, 18, 3, 4, -5, 6], expected: [-5, 1, 3, 4, 6, 18] },
    { input: [7, 6, 2, 5.2, 11, 0], expected: [0, 2, 5.2, 6, 7, 11] },
    { input: [3, 3, -2, 1, 0], expected: [-2, 0, 1, 3, 3] },
    {
      input: [3, 0, -2.4, 1, 9, 8, -7, 6],
      expected: [-7, -2.4, 0, 1, 3, 6, 8, 9]
    },
    { input: [1, 0, -14, 0, 8.6, 6, 8], expected: [-14, 0, 0, 1, 6, 8, 8.6] }
  ])('should work for given input', ({ input, expected }) => {
    expect(treeSort(input)).toEqual(expected)
  })
})

describe('TreeSort (strings)', () => {
  it.each([
    {
      input: ['e', 'egr', 'sse', 'aas', 'as', 'abs'],
      expected: ['aas', 'abs', 'as', 'e', 'egr', 'sse']
    }
  ])('should work for given input', ({ input, expected }) => {
    expect(treeSort(input)).toEqual(expected)
  })
})

describe('TreeSort (dates)', () => {
  it.each([
    {
      input: [
        new Date('2019-01-16'),
        new Date('2019-01-01'),
        new Date('2022-05-20')
      ],
      expected: [
        new Date('2019-01-01'),
        new Date('2019-01-16'),
        new Date('2022-05-20')
      ]
    }
  ])('should work for given input', ({ input, expected }) => {
    expect(treeSort(input)).toEqual(expected)
  })
})
