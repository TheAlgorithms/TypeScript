import { Edge, prim } from '../prim'

const edge_equal = (x: Edge, y: Edge): boolean => {
  return (
    (x.a == y.a && x.b == y.b) ||
    (x.a == y.b && x.b == y.a && x.weight == y.weight)
  )
}

const test_graph = (
  expected_tree_edges: Edge[],
  other_edges: Edge[],
  num_vertices: number,
  expected_cost: number
) => {
  // First make sure the graph is undirected
  const graph: [number, number][][] = []
  for (let _ = 0; _ < num_vertices; ++_) {
    graph.push([])
  }
  for (const edge of expected_tree_edges) {
    graph[edge.a].push([edge.b, edge.weight])
    graph[edge.b].push([edge.a, edge.weight])
  }
  for (const edge of other_edges) {
    graph[edge.a].push([edge.b, edge.weight])
    graph[edge.b].push([edge.a, edge.weight])
  }

  const [tree_edges, cost] = prim(graph)
  expect(cost).toStrictEqual(expected_cost)
  for (const expected_edge of expected_tree_edges) {
    expect(
      tree_edges.find((edge) => edge_equal(edge, expected_edge))
    ).toBeTruthy()
  }
  for (const unexpected_edge of other_edges) {
    expect(
      tree_edges.find((edge) => edge_equal(edge, unexpected_edge))
    ).toBeFalsy()
  }
}

describe('prim', () => {
  it('should return empty tree for empty graph', () => {
    expect(prim([])).toStrictEqual([[], 0])
  })

  it('should return empty tree for single element graph', () => {
    expect(prim([])).toStrictEqual([[], 0])
  })

  it('should return correct value for two element graph', () => {
    expect(prim([[[1, 5]], []])).toStrictEqual([[new Edge(0, 1, 5)], 5])
  })

  it('should return the correct value', () => {
    const expected_tree_edges = [
      new Edge(0, 1, 1),
      new Edge(1, 3, 2),
      new Edge(3, 2, 3)
    ]

    const other_edges = [
      new Edge(0, 2, 4),
      new Edge(0, 3, 5),
      new Edge(1, 2, 6)
    ]

    test_graph(expected_tree_edges, other_edges, 4, 6)
  })

  it('should return the correct value', () => {
    const expected_tree_edges = [
      new Edge(0, 2, 2),
      new Edge(1, 3, 9),
      new Edge(2, 6, 74),
      new Edge(2, 7, 8),
      new Edge(3, 4, 3),
      new Edge(4, 9, 9),
      new Edge(5, 7, 5),
      new Edge(7, 9, 4),
      new Edge(8, 9, 2)
    ]

    const other_edges = [
      new Edge(0, 1, 10),
      new Edge(2, 4, 47),
      new Edge(4, 5, 42)
    ]

    test_graph(expected_tree_edges, other_edges, 10, 116)
  })
})
