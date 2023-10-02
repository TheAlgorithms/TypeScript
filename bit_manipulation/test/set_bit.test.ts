import { setBit } from "../set_bit"

describe('Set Bit Function', () => {
  it.each([
    [1, 0, 1],
    [2, 0, 3],
    [10, 1, 10],
    [10, 2, 14],
  ])('Set bit number %i in %i:', (num, bitPos, expected) => {
    const setBitPos = setBit(num, bitPos)
    expect(setBitPos).toBe(expected)
  })
})

