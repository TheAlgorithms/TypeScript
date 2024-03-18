import { kosajaru } from '../kosajaru'

describe('kosajaru', () => {
  it('it should return no sccs for empty graph', () => {
    expect(kosajaru([])).toStrictEqual([])
  })

  it('it should return one scc for graph with one element', () => {
    expect(kosajaru([[]])).toStrictEqual([[0]])
  })

  it('it should return one scc for graph with element that points to itself', () => {
    expect(kosajaru([[0]])).toStrictEqual([[0]])
  })

  it('it should return one scc for two element graph with cycle', () => {
    expect(kosajaru([[1], [0]])).toStrictEqual([[0, 1]])
  })

  it('should return one scc for each element for straight line', () => {
    expect(kosajaru([[1], [2], [3], []])).toStrictEqual([[0], [1], [2], [3]])
  })

  it('should return sccs for straight line with backedge in middle', () => {
    expect(kosajaru([[1], [2], [3, 0], []])).toStrictEqual([[0, 2, 1], [3]])
  })

  it('should return sccs for straight line with backedge from end to middle', () => {
    expect(kosajaru([[1], [2], [3], [1]])).toStrictEqual([[0], [1, 3, 2]])
  })

  it('should return scc for each element for graph with no edges', () => {
    expect(kosajaru([[], [], [], []])).toStrictEqual([[3], [2], [1], [0]])
  })

  it('should return sccs disconnected graph', () => {
    expect(kosajaru([[1, 2], [0, 2], [0, 1], []])).toStrictEqual([
      [3],
      [0, 1, 2]
    ])
  })

  it('should return sccs disconnected graph', () => {
    expect(kosajaru([[1, 2], [0, 2], [0, 1], [4], [5], [3]])).toStrictEqual([
      [3, 5, 4],
      [0, 1, 2]
    ])
  })

  it('should return single scc', () => {
    expect(kosajaru([[1], [2], [3], [0, 4], [3]])).toStrictEqual([
      [0, 3, 2, 1, 4]
    ])
  })

  it('should return one scc for complete connected graph', () => {
    const input = [
      [1, 2, 3, 4],
      [0, 2, 3, 4],
      [0, 1, 3, 4],
      [0, 1, 2, 4],
      [0, 1, 2, 3]
    ]
    expect(kosajaru(input)).toStrictEqual([[0, 1, 2, 3, 4]])
  })

  it('should return sccs', () => {
    const input = [[1], [2], [0, 3], [4], []]
    expect(kosajaru(input)).toStrictEqual([[0, 2, 1], [3], [4]])
  })

  it('should return sccs', () => {
    const input = [
      [1],
      [2],
      [0, 3, 4],
      [0],
      [5],
      [6, 7],
      [2, 4],
      [8],
      [5, 9],
      [5]
    ]
    const expected = [[0, 2, 1, 6, 5, 4, 8, 7, 9, 3]]
    expect(kosajaru(input)).toStrictEqual(expected)
  })

  it('should return sccs', () => {
    const input = [[1], [0, 2], [0, 3], [4], [5, 7], [6], [4, 7], []]
    const expected = [[0, 1, 2], [3], [4, 6, 5], [7]]
    expect(kosajaru(input)).toStrictEqual(expected)
  })
})
