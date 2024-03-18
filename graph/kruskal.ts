import { DisjointSet } from '../data_structures/disjoint_set/disjoint_set'

/**
 * @function kruskal
 * @description Compute a minimum spanning forest of a weighted undirected graph
 * @Complexity_Analysis
 * Time complexity: O(Elog(V))
 * Space Complexity: O(V)
 * @param {Edge[]} edges - The edges of the graph
 * @param {number} num_vertices - The number of vertices in the graph
 * @return {Edge[], number} - [The edges of the minimum spanning tree, the sum of the weights of the edges in the tree]
 * @see https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
 */
export const kruskal = (
  edges: Edge[],
  num_vertices: number
): [Edge[], number] => {
  let cost = 0
  const minimum_spanning_tree = []

  // Use a disjoint set to quickly join sets and find if vertices live in different sets
  const sets = new DisjointSet(num_vertices)

  // Sort the edges in ascending order by weight so that we can greedily add cheaper edges to the tree
  edges.sort((a, b) => a.weight - b.weight)

  for (const edge of edges) {
    if (sets.find(edge.a) !== sets.find(edge.b)) {
      // Node A and B live in different sets. Add edge(a, b) to the tree and join the nodes' sets together.
      minimum_spanning_tree.push(edge)
      cost += edge.weight
      sets.join(edge.a, edge.b)
    }
  }

  return [minimum_spanning_tree, cost]
}

export class Edge {
  a: number = 0
  b: number = 0
  weight: number = 0
  constructor(a: number, b: number, weight: number) {
    this.a = a
    this.b = b
    this.weight = weight
  }
}
