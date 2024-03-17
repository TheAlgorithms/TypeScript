const dfs = (
  graph: number[][],
  colors: number[],
  node: number,
  color: number
): boolean => {
  if (colors[node] !== 0) {
    return colors[node] === color
  }

  colors[node] = color

  for (const neighbor of graph[node]) {
    if (!dfs(graph, colors, neighbor, -color)) {
      return false
    }
  }

  return true
}

/**
 * Determines if a given graph is bipartite.
 *
 * A Bipartite Graph is a graph whose vertices can be divided into two independent sets,
 * U and V such that every edge (u, v) either connects a vertex from U to V or a vertex from
 * V to U
 *
 * @param {number[][]} graph - The graph represented as an adjacency list.
 * @returns {boolean} - `true` if the graph is bipartite, `false` otherwise.
 */

export const isBipartite = (graph: number[][]): boolean => {
  const n: number = graph.length
  const colors: number[] = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    if (colors[i] === 0 && !dfs(graph, colors, i, 1)) {
      return false
    }
  }

  return true
}
