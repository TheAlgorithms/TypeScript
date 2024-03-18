import { Edge, kruskal } from '../kruskal'

const test_graph = (
  expected_tree_edges: Edge[],
  other_edges: Edge[],
  num_vertices: number,
  expected_cost: number
) => {
  const [tree_edges, cost] = kruskal(
    expected_tree_edges.concat(other_edges),
    num_vertices
  )
  expect(cost).toStrictEqual(expected_cost)
  for (const expected_edge of expected_tree_edges) {
    expect(tree_edges.includes(expected_edge)).toBeTruthy()
  }
  for (const unexpected_edge of other_edges) {
    expect(tree_edges.includes(unexpected_edge)).toBeFalsy()
  }
}

describe('kruskal', () => {
  it('should return empty tree for empty graph', () => {
    expect(kruskal([], 0)).toStrictEqual([[], 0])
  })

  it('should return empty tree for single element graph', () => {
    expect(kruskal([], 1)).toStrictEqual([[], 0])
  })

  it('should return correct value for two element graph', () => {
    const edge = new Edge(0, 1, 5)
    expect(kruskal([edge], 2)).toStrictEqual([[edge], 5])
  })

  it('should return the correct value', () => {
    const expected_tree_edges = [
      new Edge(0, 1, 1),
      new Edge(1, 3, 2),
      new Edge(2, 3, 3)
    ]

    const other_edges = [
      new Edge(0, 2, 4),
      new Edge(0, 3, 5),
      new Edge(1, 2, 6)
    ]

    test_graph(expected_tree_edges, other_edges, 7, 6)
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

describe('kruskal forest', () => {
  it('should return empty tree for forest of 2 node trees', () => {
    const edges = [new Edge(0, 1, 10), new Edge(2, 3, 15)]
    test_graph(edges, [], 4, 25)
  })

  it('should return the correct value', () => {
    const expected_tree_edges = [
      // Tree 1
      new Edge(0, 2, 2),
      new Edge(1, 3, 9),
      new Edge(2, 6, 74),
      new Edge(2, 7, 8),
      new Edge(3, 4, 3),
      new Edge(4, 9, 9),
      new Edge(5, 7, 5),
      new Edge(7, 9, 4),
      new Edge(8, 9, 2),

      // Tree 2
      new Edge(10, 11, 1),
      new Edge(11, 13, 2),
      new Edge(12, 13, 3)
    ]

    const other_edges = [
      // Tree 1
      new Edge(0, 1, 10),
      new Edge(2, 4, 47),
      new Edge(4, 5, 42),

      // Tree 2
      new Edge(10, 12, 4),
      new Edge(10, 13, 5),
      new Edge(11, 12, 6)
    ]

    test_graph(expected_tree_edges, other_edges, 14, 122)
  })
})
