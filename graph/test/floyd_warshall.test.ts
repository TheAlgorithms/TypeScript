import { floydWarshall } from '../floyd_warshall'

describe('floydWarshall', () => {
  it('should return the correct value for zero element graph', () => {
    expect(floydWarshall([])).toEqual([])
  })

  it('should return the correct value for one element graph', () => {
    expect(floydWarshall([[1]])).toStrictEqual([[1]])
  })

  it('should return the correct value for two element graph', () => {
    expect(
      floydWarshall([
        [10, 4],
        [3, 6]
      ])
    ).toStrictEqual([
      [7, 4],
      [3, 6]
    ])
  })

  it('should return the correct value', () => {
    const graph = []
    for (let i = 1; i <= 5; ++i) {
      const arr = []
      for (let j = 1; j <= 5; ++j) {
        arr.push(i * j)
      }
      graph.push(arr)
    }

    const expected = [
      [1, 2, 3, 4, 5],
      [2, 4, 5, 6, 7],
      [3, 5, 6, 7, 8],
      [4, 6, 7, 8, 9],
      [5, 7, 8, 9, 10]
    ]
    expect(floydWarshall(graph)).toStrictEqual(expected)
  })

  it('should return the correct value', () => {
    const graph = [
      [0, 4, Infinity, Infinity, Infinity, Infinity, Infinity, 8, Infinity],
      [4, 0, 8, Infinity, Infinity, Infinity, Infinity, 11, Infinity],
      [Infinity, 8, 0, 7, Infinity, 4, Infinity, Infinity, 2],
      [Infinity, Infinity, 7, 0, 9, 14, Infinity, Infinity, Infinity],
      [Infinity, Infinity, Infinity, 9, 0, 10, Infinity, Infinity, Infinity],
      [Infinity, Infinity, 4, 14, 10, 0, 2, Infinity, Infinity],
      [Infinity, Infinity, Infinity, Infinity, Infinity, 2, 0, 1, 6],
      [8, 11, Infinity, Infinity, Infinity, Infinity, 1, 0, 7],
      [Infinity, Infinity, 2, Infinity, Infinity, Infinity, 6, 7, 0]
    ]

    const expected = [
      [0, 4, 12, 19, 21, 11, 9, 8, 14],
      [4, 0, 8, 15, 22, 12, 12, 11, 10],
      [12, 8, 0, 7, 14, 4, 6, 7, 2],
      [19, 15, 7, 0, 9, 11, 13, 14, 9],
      [21, 22, 14, 9, 0, 10, 12, 13, 16],
      [11, 12, 4, 11, 10, 0, 2, 3, 6],
      [9, 12, 6, 13, 12, 2, 0, 1, 6],
      [8, 11, 7, 14, 13, 3, 1, 0, 7],
      [14, 10, 2, 9, 16, 6, 6, 7, 0]
    ]

    expect(floydWarshall(graph)).toStrictEqual(expected)
  })
})
