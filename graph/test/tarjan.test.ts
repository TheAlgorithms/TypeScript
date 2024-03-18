import { tarjan } from '../tarjan'

describe('tarjan', () => {
  it('it should return no sccs for empty graph', () => {
    expect(tarjan([])).toStrictEqual([])
  })

  it('it should return one scc for graph with one element', () => {
    expect(tarjan([[]])).toStrictEqual([[0]])
  })

  it('it should return one scc for graph with element that points to itself', () => {
    expect(tarjan([[0]])).toStrictEqual([[0]])
  })

  it('it should return one scc for two element graph with cycle', () => {
    expect(tarjan([[1], [0]])).toStrictEqual([[1, 0]])
  })

  it('should return one scc for each element for straight line', () => {
    expect(tarjan([[1], [2], [3], []])).toStrictEqual([[3], [2], [1], [0]])
  })

  it('should return sccs for straight line with backedge in middle', () => {
    expect(tarjan([[1], [2], [3, 0], []])).toStrictEqual([[3], [2, 1, 0]])
  })

  it('should return sccs for straight line with backedge from end to middle', () => {
    expect(tarjan([[1], [2], [3], [1]])).toStrictEqual([[3, 2, 1], [0]])
  })

  it('should return scc for each element for graph with no edges', () => {
    expect(tarjan([[], [], [], []])).toStrictEqual([[0], [1], [2], [3]])
  })

  it('should return sccs disconnected graph', () => {
    expect(tarjan([[1, 2], [0, 2], [0, 1], []])).toStrictEqual([[2, 1, 0], [3]])
  })

  it('should return sccs disconnected graph', () => {
    expect(tarjan([[1, 2], [0, 2], [0, 1], [4], [5], [3]])).toStrictEqual([
      [2, 1, 0],
      [5, 4, 3]
    ])
  })

  it('should return single scc', () => {
    expect(tarjan([[1], [2], [3], [0, 4], [3]])).toStrictEqual([
      [4, 3, 2, 1, 0]
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
    expect(tarjan(input)).toStrictEqual([[4, 3, 2, 1, 0]])
  })

  it('should return sccs', () => {
    const input = [[1], [2], [0, 3], [4], []]
    expect(tarjan(input)).toStrictEqual([[4], [3], [2, 1, 0]])
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
    const expected = [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]
    expect(tarjan(input)).toStrictEqual(expected)
  })

  it('should return sccs', () => {
    const input = [[1], [0, 2], [0, 3], [4], [5, 7], [6], [4, 7], []]
    const expected = [[7], [6, 5, 4], [3], [2, 1, 0]]
    expect(tarjan(input)).toStrictEqual(expected)
  })

  it('should return sccs where first scc cannot reach second scc', () => {
    const input = [[1], [2], [0], [4], [5], [2, 3]]
    const expected = [
      [2, 1, 0],
      [5, 4, 3]
    ]
    expect(tarjan(input)).toStrictEqual(expected)
  })
})
