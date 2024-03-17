import { isBipartite } from '../bipartite_graph'

describe('isBipartite', () => {
  it('should return true for a bipartite graph', () => {
    const graph = [
      [1, 3],
      [0, 2],
      [1, 3],
      [0, 2]
    ]
    const result = isBipartite(graph)
    expect(result).toBe(true)
  })

  it('should return true for an empty graph', () => {
    const graph: number[][] = []
    const result = isBipartite(graph)
    expect(result).toBe(true)
  })

  it('should return true for a single node graph', () => {
    const graph = [[]]
    const result = isBipartite(graph)
    expect(result).toBe(true)
  })

  it('should return false for a non-bipartite graph', () => {
    const graph = [
      [1, 2, 3],
      [0, 2],
      [0, 1, 3],
      [0, 2]
    ]
    const result = isBipartite(graph)
    expect(result).toBe(false)
  })

  it('should return true for a disconnected bipartite graph', () => {
    const graph = [[1, 2], [0], [0], [4], [3]]
    const result = isBipartite(graph)
    expect(result).toBe(true)
  })
})
