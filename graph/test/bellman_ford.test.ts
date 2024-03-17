import { bellmanFord } from '../bellman_ford'

const init_graph = (N: number): [number, number][][] => {
  const graph = Array(N)
  for (let i = 0; i < N; ++i) {
    graph[i] = []
  }
  return graph
}

describe('bellmanFord', () => {
  const add_edge = (
    graph: [number, number][][],
    a: number,
    b: number,
    weight: number
  ) => {
    graph[a].push([b, weight])
    graph[b].push([a, weight])
  }

  it('should return the correct value', () => {
    const graph = init_graph(9)
    add_edge(graph, 0, 1, 4)
    add_edge(graph, 0, 7, 8)
    add_edge(graph, 1, 2, 8)
    add_edge(graph, 1, 7, 11)
    add_edge(graph, 2, 3, 7)
    add_edge(graph, 2, 5, 4)
    add_edge(graph, 2, 8, 2)
    add_edge(graph, 3, 4, 9)
    add_edge(graph, 3, 5, 14)
    add_edge(graph, 4, 5, 10)
    add_edge(graph, 5, 6, 2)
    add_edge(graph, 6, 7, 1)
    add_edge(graph, 6, 8, 6)
    add_edge(graph, 7, 8, 7)
    expect(bellmanFord(graph, 0)).toStrictEqual([
      0, 4, 12, 19, 21, 11, 9, 8, 14
    ])
  })

  it('should return the correct value for single element graph', () => {
    expect(bellmanFord([[]], 0)).toStrictEqual([0])
  })

  const linear_graph = init_graph(4)
  add_edge(linear_graph, 0, 1, 1)
  add_edge(linear_graph, 1, 2, 2)
  add_edge(linear_graph, 2, 3, 3)
  test.each([
    [0, [0, 1, 3, 6]],
    [1, [1, 0, 2, 5]],
    [2, [3, 2, 0, 3]],
    [3, [6, 5, 3, 0]]
  ])(
    'correct result for linear graph with source node %i',
    (source, result) => {
      expect(bellmanFord(linear_graph, source)).toStrictEqual(result)
    }
  )

  const unreachable_graph = init_graph(3)
  add_edge(unreachable_graph, 0, 1, 1)
  test.each([
    [0, [0, 1, Infinity]],
    [1, [1, 0, Infinity]],
    [2, [Infinity, Infinity, 0]]
  ])(
    'correct result for graph with unreachable nodes with source node %i',
    (source, result) => {
      expect(bellmanFord(unreachable_graph, source)).toStrictEqual(result)
    }
  )
})

describe('bellmanFord negative cycle graphs', () => {
  it('should returned undefined for 2-node graph with negative cycle', () => {
    const basic = init_graph(2)
    basic[0].push([1, 2])
    basic[1].push([0, -3])
    expect(bellmanFord(basic, 0)).toStrictEqual(undefined)
    expect(bellmanFord(basic, 1)).toStrictEqual(undefined)
  })

  it('should returned undefined for graph with negative cycle', () => {
    const negative = init_graph(5)
    negative[0].push([1, 6])
    negative[0].push([3, 7])
    negative[1].push([2, 5])
    negative[1].push([3, 8])
    negative[1].push([4, -4])
    negative[2].push([1, -4])
    negative[3].push([2, -3])
    negative[3].push([4, 9])
    negative[4].push([0, 3])
    negative[4].push([2, 7])
    for (let i = 0; i < 5; ++i) {
      expect(bellmanFord(negative, i)).toStrictEqual(undefined)
    }
  })
})
