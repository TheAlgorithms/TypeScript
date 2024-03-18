import { bellmanFord } from './bellman_ford'
import { dijkstra } from './dijkstra'

/**
 * @function johnson
 * @description Compute the shortest path for all pairs of nodes. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 2-tuple where the 0'th item is the destination node, and the 1'th item is the edge weight. Returned undefined if the graph has negative weighted cycles.
 * @Complexity_Analysis
 * Time complexity: O(VElog(V))
 * Space Complexity: O(V^2) to hold the result
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @return {number[][]} - A matrix holding the shortest path for each pair of nodes. matrix[i][j] holds the distance of the shortest path (i -> j).
 * @see https://en.wikipedia.org/wiki/Johnson%27s_algorithm
 */
export const johnson = (
  graph: [number, number][][]
): number[][] | undefined => {
  const N = graph.length

  // Add a new node and 0 weighted edges from the new node to all existing nodes.
  const newNodeGraph = structuredClone(graph)
  const newNode: [number, number][] = []
  for (let i = 0; i < N; ++i) {
    newNode.push([i, 0])
  }
  newNodeGraph.push(newNode)

  // Compute distances from the new node to existing nodes using the Bellman-Ford algorithm.
  const adjustedGraph = bellmanFord(newNodeGraph, N)
  if (adjustedGraph === undefined) {
    // Found a negative weight cycle.
    return undefined
  }

  for (let i = 0; i < N; ++i) {
    for (const edge of graph[i]) {
      // Adjust edge weights using the Bellman Ford output weights. This ensure that:
      // 1. Each weight is non-negative. This is required for the Dijkstra algorithm.
      // 2. The shortest path from node i to node j consists of the same nodes with or without adjustment.
      edge[1] += adjustedGraph[i] - adjustedGraph[edge[0]]
    }
  }

  const shortestPaths: number[][] = []
  for (let i = 0; i < N; ++i) {
    // Compute Dijkstra weights for each node and re-adjust weights to their original values.
    const dijkstraShorestPaths = dijkstra(graph, i)
    for (let j = 0; j < N; ++j) {
      dijkstraShorestPaths[j] += adjustedGraph[j] - adjustedGraph[i]
    }
    shortestPaths.push(dijkstraShorestPaths)
  }
  return shortestPaths
}
