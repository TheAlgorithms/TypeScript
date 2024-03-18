import { perfectSquare } from '../perfect_square'

test('Check perfect square', () => {
  expect(perfectSquare(16)).toBe(true)
  expect(perfectSquare(12)).toBe(false)
  expect(perfectSquare(19)).toBe(false)
  expect(perfectSquare(25)).toBe(true)
  expect(perfectSquare(42)).toBe(false)
})
