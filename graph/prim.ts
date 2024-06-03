import { PriorityQueue } from '../data_structures/heap/heap'
/**
 * @function prim
 * @description Compute a minimum spanning tree(MST) of a fully connected weighted undirected graph. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 2-tuple where the 0'th item is the destination node, and the 1'th item is the edge weight.
 * @Complexity_Analysis
 * Time complexity: O(Elog(V))
 * Space Complexity: O(V)
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @return {Edge[], number} - [The edges of the minimum spanning tree, the sum of the weights of the edges in the tree]
 * @see https://en.wikipedia.org/wiki/Prim%27s_algorithm
 */
export const prim = (graph: [number, number][][]): [Edge[], number] => {
  if (graph.length == 0) {
    return [[], 0]
  }
  const minimum_spanning_tree: Edge[] = []
  let total_weight = 0

  const priorityQueue = new PriorityQueue(
    (e: Edge) => {
      return e.b
    },
    graph.length,
    (a: Edge, b: Edge) => {
      return a.weight < b.weight
    }
  )
  const visited = new Set<number>()

  // Start from the 0'th node. For fully connected graphs, we can start from any node and still produce the MST.
  visited.add(0)
  add_children(graph, priorityQueue, 0)

  while (!priorityQueue.isEmpty()) {
    // We have already visited vertex `edge.a`. If we have not visited `edge.b` yet, we add its outgoing edges to the PriorityQueue.
    const edge = priorityQueue.extract()
    if (visited.has(edge.b)) {
      continue
    }
    minimum_spanning_tree.push(edge)
    total_weight += edge.weight
    visited.add(edge.b)
    add_children(graph, priorityQueue, edge.b)
  }

  return [minimum_spanning_tree, total_weight]
}

const add_children = (
  graph: [number, number][][],
  priorityQueue: PriorityQueue<Edge>,
  node: number
) => {
  for (const out_edge of graph[node]) {
    // By increasing the priority, we ensure we only add each vertex to the queue one time, and the queue will be at most size V.
    priorityQueue.increasePriority(
      out_edge[0],
      new Edge(node, out_edge[0], out_edge[1])
    )
  }
}

export class Edge {
  a: number = 0
  b: number = 0
  weight: number = 0
  constructor(a: number, b: number, weight: number) {
    this.a = a
    this.b = b
    this.weight = weight
  }
}
