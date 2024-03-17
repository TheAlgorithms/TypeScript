import { jugglerSequence } from '../juggler_sequence'

describe('jugglerSequence', () => {
  it.each([
    [3, 3, 36],
    [3, 5, 2],
    [7, 3, 2],
    [5, 1, 11]
  ])('%i at index %i should equal %i', (a, n, k) => {
    expect(jugglerSequence(a, n)).toBe(k)
  })
})
