/**
 * @function dijkstra
 * @description Compute the shortest path from a source node to all other nodes. The input graph is an adjacency matrix where `0` represents no edge, and a positive value represents the weight of the edge. All weights are positive.
 * @Complexity_Analysis
 * Time complexity: O(V^2)
 * Space Complexity: O(V)
 * @param {number[][]} graph - The adjacency matrix graph
 * @param {number} start - The source node
 * @return {number[]} - The shortest path to each node
 * @see https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 */
export const dijkstra = (graph: number[][], start: number): number[] => {
  let visited = Array(graph.length).fill(false);
  let distances = Array(graph.length).fill(Infinity);
  distances[start] = 0;

  let node = start;
  while (node !== -1) {
    visited[node] = true;
    graph[node].forEach((weight, child) => {
      if (child == node || weight === 0) {
        return;
      }
      let new_path = distances[node] + weight;
      if (new_path < distances[child]) {
        distances[child] = new_path;
      }
    });
    node = extract_min(distances, visited);
  }

  return distances;
}

const extract_min = (paths: number[], visited: boolean[]): number => {
  let min = Number.MAX_SAFE_INTEGER;
  let node = -1;

  for (let i = 0; i < paths.length; ++i) {
    if (visited[i]) {
      continue;
    }
    if (paths[i] < min) {
      min = paths[i];
      node = i;
    }
  }
  return node;
}

