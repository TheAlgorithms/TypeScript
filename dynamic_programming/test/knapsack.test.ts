import { knapsack } from '../knapsack'

const cases: [number, number[], number[], number][] = [
  [15, [6, 5, 6, 6, 3, 7], [5, 6, 4, 6, 5, 2], 17],
  [50, [10, 20, 30], [60, 100, 120], 220],
  [8, [3, 4, 5], [30, 50, 60], 90],
  [
    5,
    [1, 1, 1, 1, 1],
    [1000000000, 1000000000, 1000000000, 1000000000, 1000000000],
    5000000000
  ]
]

describe('Knapsack Algorithm Test', () => {
  test.each(cases)(
    'given %p capacity available, with weights %p and values %p, knapsack should return %p',
    (capacity, weights, values, expectedResult) => {
      const result = knapsack(capacity, weights, values)
      expect(result).toBe(expectedResult)
    }
  )
})
