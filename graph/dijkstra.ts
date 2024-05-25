import { PriorityQueue } from '../data_structures/heap/heap'
/**
 * @function dijkstra
 * @description Compute the shortest path from a source node to all other nodes. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 2-tuple where the 0'th item is the destination node, and the 1'th item is the edge weight.
 * @Complexity_Analysis
 * Time complexity: O((V+E)*log(V)). For fully connected graphs, it is O(E*log(V)).
 * Space Complexity: O(V)
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @param {number} start - The source node
 * @return {number[]} - The shortest path to each node
 * @see https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
 */
export const dijkstra = (
  graph: [number, number][][],
  start: number
): number[] => {
  // We use a priority queue to make sure we always visit the closest node. The
  // queue makes comparisons based on path weights.
  const priorityQueue = new PriorityQueue(
    (a: [number, number]) => {
      return a[0]
    },
    graph.length,
    (a: [number, number], b: [number, number]) => {
      return a[1] < b[1]
    }
  )
  priorityQueue.insert([start, 0])
  // We save the shortest distance to each node in `distances`. If a node is
  // unreachable from the start node, its distance is Infinity.
  const distances = Array(graph.length).fill(Infinity)
  distances[start] = 0

  while (priorityQueue.size() > 0) {
    const node = priorityQueue.extract()[0]
    graph[node].forEach(([child, weight]) => {
      const new_distance = distances[node] + weight
      if (new_distance < distances[child]) {
        // Found a new shortest path to child node. Record its distance and add child to the queue.
        // If the child already exists in the queue, the priority will be updated. This will make sure the queue will be at most size V (number of vertices).
        priorityQueue.increasePriority(child, [child, weight])
        distances[child] = new_distance
      }
    })
  }

  return distances
}
