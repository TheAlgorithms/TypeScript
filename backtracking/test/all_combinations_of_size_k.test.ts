import { generateCombinations } from '../all_combinations_of_size_k'

const cases = [
  [
    3,
    2,
    [
      [1, 2],
      [1, 3],
      [2, 3]
    ]
  ],
  [
    4,
    2,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ]
  ],
  [0, 0, []],
  [2, 3, []]
] as const

describe('AllCombinationsOfSizeK', () => {
  it.each(cases)(
    'create all combinations given n=%p and k=%p',
    (n, k, expectedCombos) => {
      const combinations = generateCombinations(n, k)
      expect(combinations).toEqual(expectedCombos)
    }
  )
})
