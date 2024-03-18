import { selectionSort } from '../selection_sort'

describe('Testing Selection sort', () => {
  const testCases: number[][] = []

  for (let i = 0; i < 10; i++) {
    const arr = []
    for (let j = 0; j < 100; j++) {
      arr.push(Math.floor(Math.random() * 100))
    }
    testCases.push(arr)
  }
  test.each(testCases)(
    'should return the correct value for test case: %#',
    (...arr: number[]) => {
      expect(selectionSort([...arr])).toStrictEqual(
        [...arr].sort((a: number, b: number) => a - b)
      )
    }
  )
})
