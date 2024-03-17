import { gnomeSort } from '../gnome_sort'

describe('Testing Gnome sort', () => {
  const testCases: number[][] = [
    [],
    [2, 1],
    [8, 3, 5, 9, 1, 7, 4, 2, 6],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]

  test.each(testCases)(
    'should return the correct value for test case: %#',
    (...arr: number[]) => {
      expect(gnomeSort([...arr])).toStrictEqual(
        [...arr].sort((a: number, b: number) => a - b)
      )
    }
  )
})
