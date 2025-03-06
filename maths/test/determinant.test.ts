import { det } from '../determinant'

describe('determinant', () => {
  test.each([
    [
      [
        [1, 2],
        [3, 4, 5]
      ]
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6]
      ]
    ],
    [
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    ]
  ])('should throw an error for non square matrix %p', (matrix) => {
    expect(() => det(matrix)).toThrow(
      'only square matrices can have determinants'
    )
  })

  test.each([
    [
      [
        [1, 2],
        [3, 4]
      ],
      -2
    ],
    [
      [
        [1, 1],
        [1, 1]
      ],
      0
    ],
    [
      [
        [1, 2],
        [0, 0]
      ],
      0
    ],
    [
      [
        [8, 1, 5],
        [9, 3, 7],
        [1, 4, 4]
      ],
      8
    ],
    [
      [
        [15, 85, 32],
        [76, 83, 23],
        [28, 56, 92]
      ],
      -382536
    ],
    [
      [
        [2, -1, 0, 3],
        [4, 0, 1, 2],
        [3, 2, -1, 1],
        [1, 3, 2, -2]
      ],
      -42
    ],
    [
      [
        [0.75483643, 0.68517541, 0.53548329, 0.5931435],
        [0.37031247, 0.80103707, 0.82563949, 0.91266224],
        [0.39293451, 0.27228353, 0.54093836, 0.51963319],
        [0.60997323, 0.40161682, 0.58330774, 0.17392144]
      ],
      -0.051073
    ]
  ])('determinant of %p should be %d', (matrix, expected) => {
    expect(det(matrix)).toBe(expected)
  })
})
