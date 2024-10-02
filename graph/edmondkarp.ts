/**
 * @function edmondkarp
 * @description Compute the maximum flow from a source node to a sink node. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 3-tuple where the 0'th item is the destination node, the 1'th item is the edge weight, and the 2'nd item is the edge capacity.
 * @Complexity_Analysis
 * Time complexity: O(V*E^2) where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V) where V is the number of vertices
 * @param {[number, number, number][][]} graph - The graph in adjacency list form
 * @param {number} source - The source node
 * @param {number} sink - The sink node
 * @return {number} - The maximum flow from the source node to the sink node
 * @see https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm
 */

function edmondkarp(graph: [number, number, number][][], source: number, sink: number): number {
    // Initialize capacity and flow matrices with zeros and build capacity matrix from graph 
    const n = graph.length;
    const capacity = Array.from({ length: n }, () => Array(n).fill(0));
    const flow = Array.from({ length: n }, () => Array(n).fill(0));

    // Build capacity matrix 
    for (let u = 0; u < n; u++) {
        for (const [v, , cap] of graph[u]) {
            capacity[u][v] = cap;
        }
    }

    // Breadth-first search
    const bfs = (parent: number[]): boolean => {
        const visited = Array(n).fill(false);
        const queue: number[] = [];
        queue.push(source);
        visited[source] = true;

        // Find an augmenting path from source to sink by doing a BFS traversal
        while (queue.length > 0) {
            // Dequeue
            const u = queue.shift()!;
            // Enqueue all adjacent unvisited vertices with available capacity
            for (let v = 0; v < n; v++) {
                // If there is available capacity and the vertex has not been visited
                if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                    queue.push(v);
                    visited[v] = true;
                    parent[v] = u;
                    // If we reach the sink, we have found the augmenting path
                    if (v === sink) {
                        return true;
                    }
                }
            }
        }
        return false;
    };

    let maxFlow = 0;
    const parent = Array(n).fill(-1);

    while (bfs(parent)) {
        let pathFlow = Infinity;
        // Find the maximum flow through the path found
        for (let v = sink; v !== source; v = parent[v]) {
            const u = parent[v];
            pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
        }
        // Update the flow matrix
        for (let v = sink; v !== source; v = parent[v]) {
            const u = parent[v];
            flow[u][v] += pathFlow;
            flow[v][u] -= pathFlow;
        }

        maxFlow += pathFlow;
    }

    return maxFlow;
}