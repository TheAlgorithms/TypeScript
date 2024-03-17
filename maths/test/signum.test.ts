import { signum } from '../signum'

test.each([
  [10, 1],
  [0, 0],
  [-69, -1],
  [NaN, NaN]
])('The sign of %i is %i', (num, expected) => {
  expect(signum(num)).toBe(expected)
})
