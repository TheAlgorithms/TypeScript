export function createGraph(v: number): number[][] {
  return new Array(v).fill([]).map(() => []);
}

export function addEdge(graph: number[][], v: number, w: number): void {
  graph[v].push(w);
}

export function topologicalSortUtil(
  v: number,
  visited: boolean[],
  graph: number[][],
  stack: number[]
): void {
  visited[v] = true;

  for (const i of graph[v]) {
    if (!visited[i]) {
      topologicalSortUtil(i, visited, graph, stack);
    }
  }

  stack.push(v);
}

/**
 * Performs a topological sort on a directed acyclic graph (DAG).
 *
 * @param graph - The adjacency list representing the DAG.
 * @returns An array containing the vertices in topologically sorted order.
 *
 * @remarks
 * Topological sorting is used to find a linear ordering of the vertices
 * in a directed acyclic graph such that for every directed edge (u, v),
 * vertex 'u' comes before vertex 'v' in the ordering.
 *
 */
export function topologicalSort(graph: number[][]): number[] {
  const stack: number[] = [];
  const visited: boolean[] = new Array(graph.length).fill(false);

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      topologicalSortUtil(i, visited, graph, stack);
    }
  }

  return stack.reverse();
}
