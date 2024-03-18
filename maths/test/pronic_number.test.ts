import { pronicNumber } from '../pronic_number'

test.each([
  [0, true],
  [10, false],
  [30, true],
  [69, false],
  [420, true]
])('Pronic Number', (number, result) => {
  expect(pronicNumber(number)).toBe(result)
})
