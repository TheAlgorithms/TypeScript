// Compute the node priorities, which will be used to determine the order in which we perform transposed DFS.
const getNodePriorities = (
  graph: number[][],
  visited: boolean[],
  stack: number[],
  node: number
) => {
  if (visited[node]) {
    return
  }
  visited[node] = true

  for (const dest of graph[node]) {
    getNodePriorities(graph, visited, stack, dest)
  }
  // Nodes that end their DFS earlier are pushed onto the stack first and have lower priority.
  stack.push(node)
}

// Return the transpose of graph. The tranpose of a directed graph is a graph where each of the edges are flipped.
const transpose = (graph: number[][]): number[][] => {
  const transposedGraph = Array(graph.length)
  for (let i = 0; i < graph.length; ++i) {
    transposedGraph[i] = []
  }

  for (let i = 0; i < graph.length; ++i) {
    for (let j = 0; j < graph[i].length; ++j) {
      transposedGraph[graph[i][j]].push(i)
    }
  }

  return transposedGraph
}

// Computes the SCC that contains the given node
const gatherScc = (
  graph: number[][],
  visited: boolean[],
  node: number,
  scc: number[]
) => {
  if (visited[node]) {
    return
  }
  visited[node] = true
  scc.push(node)

  for (const dest of graph[node]) {
    gatherScc(graph, visited, dest, scc)
  }
}

/**
 * @function kosajaru
 * @description Given a graph, find the strongly connected components(SCC). A set of nodes form a SCC if there is a path between all pairs of points within that set.
 * @Complexity_Analysis
 * Time complexity: O(V + E). We perform two DFS twice, and make sure to visit each disconnected graph. Each DFS is O(V + E).
 * Space Complexity: O(V + E). This space is required for the transposed graph.
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @return {number[][]} - An array of SCCs, where an SCC is an array with the indices of each node within that SCC.
 * @see https://en.wikipedia.org/wiki/Kosaraju%27s_algorithm
 */
export const kosajaru = (graph: number[][]): number[][] => {
  const visited = Array(graph.length).fill(false)

  const stack: number[] = []
  for (let i = 0; i < graph.length; ++i) {
    getNodePriorities(graph, visited, stack, i)
  }

  const transposedGraph = transpose(graph)

  const sccs = []
  visited.fill(false)
  for (let i = stack.length - 1; i >= 0; --i) {
    if (!visited[stack[i]]) {
      const scc: number[] = []
      gatherScc(transposedGraph, visited, stack[i], scc)
      sccs.push(scc)
    }
  }
  return sccs
}
