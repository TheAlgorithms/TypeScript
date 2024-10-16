import edmondsKarp from '../edmonds_karp'

describe('Edmonds-Karp Algorithm', () => {
  it('should find the maximum flow in a simple graph', () => {
    const graph: [number, number][][] = [
      [
        [1, 3],
        [2, 2]
      ], // Node 0: Edges to node 1 (capacity 3), and node 2 (capacity 2)
      [[3, 2]], // Node 1: Edge to node 3 (capacity 2)
      [[3, 3]], // Node 2: Edge to node 3 (capacity 3)
      [] // Node 3: No outgoing edges
    ]
    const source = 0
    const sink = 3
    const maxFlow = edmondsKarp(graph, source, sink)
    expect(maxFlow).toBe(4)
  })

  it('should find the maximum flow in a more complex graph', () => {
    const graph: [number, number][][] = [
      [
        [1, 10],
        [2, 10]
      ], // Node 0: Edges to node 1 and node 2 (both capacity 10)
      [
        [3, 4],
        [4, 8]
      ], // Node 1: Edges to node 3 (capacity 4), and node 4 (capacity 8)
      [[4, 9]], // Node 2: Edge to node 4 (capacity 9)
      [[5, 10]], // Node 3: Edge to node 5 (capacity 10)
      [[5, 10]], // Node 4: Edge to node 5 (capacity 10)
      [] // Node 5: No outgoing edges (sink)
    ]
    const source = 0
    const sink = 5
    const maxFlow = edmondsKarp(graph, source, sink)
    expect(maxFlow).toBe(14)
  })

  it('should return 0 when there is no path from source to sink', () => {
    const graph: [number, number][][] = [
      [], // Node 0: No outgoing edges
      [], // Node 1: No outgoing edges
      [] // Node 2: No outgoing edges (sink)
    ]
    const source = 0
    const sink = 2
    const maxFlow = edmondsKarp(graph, source, sink)
    expect(maxFlow).toBe(0)
  })

  it('should handle graphs with no edges', () => {
    const graph: [number, number][][] = [
      [], // Node 0: No outgoing edges
      [], // Node 1: No outgoing edges
      [] // Node 2: No outgoing edges
    ]
    const source = 0
    const sink = 2
    const maxFlow = edmondsKarp(graph, source, sink)
    expect(maxFlow).toBe(0)
  })

  it('should handle graphs with self-loops', () => {
    const graph: [number, number][][] = [
      [
        [0, 10],
        [1, 10]
      ], // Node 0: Self-loop with capacity 10, and edge to node 1 (capacity 10)
      [
        [1, 10],
        [2, 10]
      ], // Node 1: Self-loop and edge to node 2
      [] // Node 2: No outgoing edges (sink)
    ]
    const source = 0
    const sink = 2
    const maxFlow = edmondsKarp(graph, source, sink)
    expect(maxFlow).toBe(10)
  })
})
