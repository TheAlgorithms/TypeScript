import { degreesToRadians } from '../degrees_to_radians'

test('DegreesToRadians', () => {
  expect(degreesToRadians(0)).toBe(0)
  expect(degreesToRadians(45)).toBe(0.7853981633974483)
  expect(degreesToRadians(90)).toBe(1.5707963267948966)
})
