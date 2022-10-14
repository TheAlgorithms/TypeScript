import { ArmstrongNumber } from "../ArmstrongNumber"

test('ArmstrongNumber', () => {
  test.each([[9, true], [-310, false], [0, false], [407, true], [420, false], [92727, true], [13579, false]])('i is an Armstrong number or not', (num, expected) => {
    expect(ArmstrongNumber(num)).toBe(expected)
  })
})