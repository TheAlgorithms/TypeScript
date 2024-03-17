/**
 * @function floydWarshall
 * @description Compute the shortest path for all pairs of nodes for a graph without negative weight edges. The input graph is a adjacency matrix, where graph[i][j] holds the weight of edges a->b. If the edge does not exist, the value in the matrix is Infinity.
 * @Complexity_Analysis
 * Time complexity: O(V^3)
 * Space Complexity: O(V^2). This space is required to hold the result
 * @param {number[][]} graph - The graph in adjacency matrix form
 * @return {number[][]} - A matrix holding the shortest path for each pair of nodes. matrix[i][j] holds the distance of the shortest path (i -> j).
 * @see https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm
 */
export const floydWarshall = (graph: number[][]): number[][] => {
  let distances = structuredClone(graph)
  const N = graph.length

  // We begin by setting the weighted adjacency matrix as the shortest paths.
  // For the k'th iteration, we try to relax the shortest paths by including node k in the path.
  for (let k = 0; k < N; ++k) {
    const newDistances = []
    for (let i = 0; i < N; ++i) {
      newDistances.push(Array(N).fill(Infinity))
    }

    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < N; ++j) {
        // The shortest path from node i to j is the minimum of:
        // 1. the shortest path (i -> j) without node k
        // 2. the sum of the shortest path (i -> k) and (k -> j)
        newDistances[i][j] = Math.min(
          distances[i][j],
          distances[i][k] + distances[k][j]
        )
      }
    }
    distances = newDistances
  }

  return distances
}
