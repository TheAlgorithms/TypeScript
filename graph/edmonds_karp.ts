import { StackQueue } from '../data_structures/queue/stack_queue'

/**
 * @function edmondsKarp
 * @description Compute the maximum flow from a source node to a sink node using the Edmonds-Karp algorithm.
 * @Complexity_Analysis
 * Time complexity: O(V * E^2) where V is the number of vertices and E is the number of edges.
 * Space Complexity: O(E) due to residual graph representation.
 * @param {[number, number][][]} graph - The graph in adjacency list form.
 * @param {number} source - The source node.
 * @param {number} sink - The sink node.
 * @return {number} - The maximum flow from the source node to the sink node.
 * @see https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm
 */
export default function edmondsKarp(
  graph: [number, number][][],
  source: number,
  sink: number
): number {
  const n = graph.length

  // Initialize residual graph
  const residualGraph: [number, number][][] = Array.from(
    { length: n },
    () => []
  )

  // Build residual graph from the original graph
  for (let u = 0; u < n; u++) {
    for (const [v, cap] of graph[u]) {
      if (cap > 0) {
        residualGraph[u].push([v, cap]) // Forward edge
        residualGraph[v].push([u, 0]) // Reverse edge with 0 capacity
      }
    }
  }

  const findAugmentingPath = (parent: (number | null)[]): number => {
    const visited = Array(n).fill(false)
    const queue = new StackQueue<number>()
    queue.enqueue(source)
    visited[source] = true
    parent[source] = null

    while (queue.length() > 0) {
      const u = queue.dequeue()
      for (const [v, cap] of residualGraph[u]) {
        if (!visited[v] && cap > 0) {
          parent[v] = u
          visited[v] = true
          if (v === sink) {
            // Return the bottleneck capacity along the path
            let pathFlow = Infinity
            let current = v
            while (parent[current] !== null) {
              const prev = parent[current]!
              const edgeCap = residualGraph[prev].find(
                ([node]) => node === current
              )![1]
              pathFlow = Math.min(pathFlow, edgeCap)
              current = prev
            }
            return pathFlow
          }
          queue.enqueue(v)
        }
      }
    }
    return 0
  }

  let maxFlow = 0
  const parent = Array(n).fill(null)

  while (true) {
    const pathFlow = findAugmentingPath(parent)
    if (pathFlow === 0) break // No augmenting path found

    // Update the capacities and reverse capacities in the residual graph
    let v = sink
    while (parent[v] !== null) {
      const u = parent[v]!
      // Update capacity of the forward edge
      const forwardEdge = residualGraph[u].find(([node]) => node === v)!
      forwardEdge[1] -= pathFlow
      // Update capacity of the reverse edge
      const reverseEdge = residualGraph[v].find(([node]) => node === u)!
      reverseEdge[1] += pathFlow

      v = u
    }

    maxFlow += pathFlow
  }

  return maxFlow
}
