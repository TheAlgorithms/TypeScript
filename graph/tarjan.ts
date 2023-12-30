/**
 * @function tarjan
 * @description Given a graph, find the strongly connected components(SCC). A set of nodes form a SCC if there is a path between all pairs of points within that set.
 * @Complexity_Analysis
 * Time complexity: O(V + E). We perform a DFS of (V + E)
 * Space Complexity: O(V). We hold numerous structures all of which at worst holds O(V) nodes.
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @return {number[][]} - An array of SCCs, where an SCC is an array with the indices of each node within that SCC.
 * @see https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
 */
export const tarjan = (graph: number[][]): number[][] => {
  const dfs = (node: number) => {
    discovery[node] = index;
    low[node] = index;
    ++index;
    stack.push(node);
    stackContains[node] = true;

    for (const child of graph[node]) {
      if (low[child] === -1) {
        dfs(child);
        if (low[child] < low[node]) {
          // Child node loops back to this node's ancestor. Update the low node.
          low[node] = low[child];
        }
      } else if (stackContains[child] && low[node] > discovery[child]) {
        // Found a backedge. Update the low for this node if needed.
        low[node] = discovery[child];
      }
    }

    if (discovery[node] == low[node]) {
      // node is the root of a SCC. Gather the SCC's nodes from the stack.
      let scc: number[] = [];
      let i = stack.length - 1;
      while (stack[i] != node) {
        scc.push(stack[i]);
        stackContains[stack[i]] = false;
        stack.pop();
        --i;
      }
      scc.push(stack[i]);
      stack.pop();
      stackContains[stack[i]] = false;
      sccs.push(scc);
    }
  }

  if (graph.length === 0) {
    return [];
  }

  let index = 0;
  // The order in which we discover nodes
  let discovery: number[] = Array(graph.length).fill(-1);
  // For each node, holds the furthest ancestor it can reach
  let low: number[] = Array(graph.length).fill(-1);
  // Holds the nodes we have visited in a DFS traversal and are considering to group into a SCC
  let stack: number[] = [];
  // Holds the elements in the stack.
  let stackContains = Array(graph.length).fill(false);
  let sccs: number[][] = [];

  for (let i = 0; i < graph.length; ++i) {
    if (low[i] === -1) {
      dfs(i);
    }
  }
  return sccs;
}

