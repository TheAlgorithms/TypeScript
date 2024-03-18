/**
 * @function tarjan
 * @description Given a graph, find the strongly connected components(SCC) in reverse topological order. A set of nodes form a SCC if there is a path between all pairs of points within that set.
 * @Complexity_Analysis
 * Time complexity: O(V + E). We perform a DFS of (V + E)
 * Space Complexity: O(V). We hold numerous structures all of which at worst holds O(V) nodes.
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @return {number[][]} - An array of SCCs, where an SCC is an array with the indices of each node within that SCC. The order of SCCs in the array are in reverse topological order.
 * @see https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 */
export const tarjan = (graph: number[][]): number[][] => {
  if (graph.length === 0) {
    return []
  }

  let index = 0
  // The order in which we discover nodes
  const discovery: number[] = Array(graph.length)
  // For each node, holds the furthest ancestor it can reach
  const low: number[] = Array(graph.length).fill(undefined)
  // Holds the nodes we have visited in a DFS traversal and are considering to group into a SCC
  const stack: number[] = []
  // Holds the elements in the stack.
  const stackContains = Array(graph.length).fill(false)
  const sccs: number[][] = []

  const dfs = (node: number) => {
    discovery[node] = index
    low[node] = index
    ++index
    stack.push(node)
    stackContains[node] = true

    for (const child of graph[node]) {
      if (low[child] === undefined) {
        dfs(child)
        if (low[child] < low[node]) {
          // Child node loops back to this node's ancestor. Update the low node.
          low[node] = low[child]
        }
      } else if (stackContains[child] && low[node] > discovery[child]) {
        // Found a backedge. Update the low for this node if needed.
        low[node] = discovery[child]
      }
    }

    if (discovery[node] == low[node]) {
      // node is the root of a SCC. Gather the SCC's nodes from the stack.
      const scc: number[] = []
      let i
      for (i = stack.length - 1; stack[i] != node; --i) {
        scc.push(stack[i])
        stackContains[stack[i]] = false
        stack.pop()
      }
      scc.push(stack[i])
      stackContains[stack[i]] = false
      stack.pop()
      sccs.push(scc)
    }
  }

  for (let i = 0; i < graph.length; ++i) {
    if (low[i] === undefined) {
      dfs(i)
    }
  }
  return sccs
}
