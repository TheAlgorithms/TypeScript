import { euclideanDistance } from '../euclidean_distance'

describe('Euclidean distance', () => {
  test.each([
    [[0, 0], [0, 0], 0],
    [[1, 0], [0, 0], 1],
    [[0, 1], [0, 0], 1],
    [[3, 4], [0, 0], 5],
    [[1, 2, 3], [4, 5, 6], 5.196152422706632],
    [[-1, -1], [1, 1], Math.sqrt(8)],
    [[2, 3], [2, 3], 0]
  ])('between %p and %p should be %f', (point1, point2, expected) => {
    expect(euclideanDistance(point1, point2)).toBeCloseTo(expected)
  })

  test.each([
    [[0, 0], [0]],
    [[1], [1, 2]],
    [
      [1, 2, 3],
      [4, 5]
    ]
  ])(
    'should throw an error for mismatched dimensions %p and %p',
    (point1, point2) => {
      expect(() => euclideanDistance(point1, point2)).toThrowError(
        'Vectors must have the same dimensions'
      )
    }
  )

  test('should handle empty vectors', () => {
    expect(euclideanDistance([], [])).toBe(0)
  })

  test('should handle large vectors', () => {
    const largeVector1 = Array(1000).fill(1)
    const largeVector2 = Array(1000).fill(2)
    expect(euclideanDistance(largeVector1, largeVector2)).toBeCloseTo(
      Math.sqrt(1000)
    )
  })
})
