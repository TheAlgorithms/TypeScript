import { phi } from '../euler_totient'

const cases: [number, number][] = [
  [4, 2],
  [5, 4],
  [7, 6],
  [10, 4],
  [999, 648],
  [1000, 400],
  [1000000, 400000],
  [999999, 466560],
  [999999999999878, 473684210526240]
]

describe('phi', () => {
  test.each(cases)('phi of %i should be %i', (num, expected) => {
    expect(phi(num)).toBe(expected)
  })
})
