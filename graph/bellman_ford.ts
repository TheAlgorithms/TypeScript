/**
 * @function bellmanFord
 * @description Compute the shortest path from a source node to all other nodes. If there is negative weight cycle, returns undefined. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 2-tuple where the 0'th item is the destination node, and the 1'th item is the edge weight.
 * @Complexity_Analysis
 * Time complexity: O(E*V)
 * Space Complexity: O(V)
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @param {number} start - The source node
 * @return {number[] | undefined} - The shortest path to each node, undefined if there is negative weight cycle
 * @see https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm
 */
export const bellmanFord = (
  graph: [number, number][][],
  start: number
): number[] | undefined => {
  // We save the shortest distance to each node in `distances`. If a node is
  // unreachable from the start node, its distance is Infinity.
  const distances = Array(graph.length).fill(Infinity)
  distances[start] = 0

  // On the i'th iteration, we compute all shortest paths that consists of i+1
  // nodes. If we compute this V-1 times, we will have computed all simple
  // shortest paths in the graph because a shortest path has at most V nodes.
  for (let i = 0; i < graph.length - 1; ++i) {
    for (let node = 0; node < graph.length; ++node) {
      for (const [child, weight] of graph[node]) {
        const new_distance = distances[node] + weight
        if (new_distance < distances[child]) {
          distances[child] = new_distance
        }
      }
    }
  }

  // Look through all edges. If the shortest path to a destination node d is
  // larger than the distance to source node s and weight(s->d), then the path
  // to s must have a negative weight cycle.
  for (let node = 0; node < graph.length; ++node) {
    for (const [child, weight] of graph[node]) {
      if (distances[child] > distances[node] + weight) {
        return undefined
      }
    }
  }

  return distances
}
