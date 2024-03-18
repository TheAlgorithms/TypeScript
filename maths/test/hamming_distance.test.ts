import { hammingDistance } from '../hamming_distance'

test.each([
  ['happy', 'homie', 4],
  ['hole', 'home', 1],
  ['cathrine', 'caroline', 3],
  ['happiness', 'dizziness', 4]
])('Hamming Distance', (str1, str2, result) => {
  expect(hammingDistance(str1, str2)).toBe(result)
})
