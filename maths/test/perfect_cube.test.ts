import { perfectCube } from '../perfect_cube'

describe('perfect cube tests', () => {
  it.each([
    [27, true],
    [9, false],
    [8, true],
    [12, false],
    [64, true],
    [151, false],
    [125, true]
  ])('The return value of %i should be %s', (n, expectation) => {
    expect(perfectCube(n)).toBe(expectation)
  })
})
