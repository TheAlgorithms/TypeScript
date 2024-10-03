/**
 * @description Compute the maximum flow from a source node to a sink node. The input graph is in adjacency list form. It is a multidimensional array of edges. graph[i] holds the edges for the i'th node. Each edge is a 2-tuple where the 0'th item is the destination node, and the 1'st item is the edge capacity.
 * @Complexity_Analysis
 * Time complexity: O(V * E^2) where V is the number of vertices and E is the number of edges
 * Space Complexity: O(V^2) where V is the number of vertices
 * @param {[number, number][][]} graph - The graph in adjacency list form
 * @param {number} source - The source node
 * @param {number} sink - The sink node
 * @return {number} - The maximum flow from the source node to the sink node
 * @see https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm
 */

function edmondkarp(graph: [number, number][][], source: number, sink: number): number {
    const n = graph.length;

    // Residual graph in adjacency list form
    const residualGraph: Map<number, [number, number][]> = new Map();
    for (let u = 0; u < n; u++) {
        residualGraph.set(u, []);
        for (const [v, capacity] of graph[u]) {
            residualGraph.get(u)?.push([v, capacity]);
            if (!residualGraph.has(v)) {
                residualGraph.set(v, []);
            }
        }
    }

    const parent = Array(n).fill(null);
    let maxFlow = 0;

    // Level-order BFS using two level arrays
    const bfs = (): boolean => {
        const visited = Array(n).fill(false);
        const currentLevel: number[] = [];
        const nextLevel: number[] = [];
        currentLevel.push(source);
        visited[source] = true;

        while (currentLevel.length > 0) {
            nextLevel.length = 0;

            for (const u of currentLevel) {
                for (const [v, capacity] of residualGraph.get(u)!) {
                    if (!visited[v] && capacity > 0) {
                        parent[v] = u;
                        visited[v] = true;

                        // If we reach the sink, we have found an augmenting path
                        if (v === sink) {
                            return true;
                        }

                        nextLevel.push(v);
                    }
                }
            }

            currentLevel.length = 0;
            currentLevel.push(...nextLevel);
        }

        return false;
    };

    while (bfs()) {
        let pathFlow = Infinity;

        // Find the maximum flow through the path found
        for (let v = sink; v !== source; v = parent[v]!) {
            const u = parent[v]!;
            const edge = residualGraph.get(u)!.find(([dest]) => dest === v)!;
            pathFlow = Math.min(pathFlow, edge[1]);
        }

        // Update the residual graph
        for (let v = sink; v !== source; v = parent[v]!) {
            const u = parent[v]!;

            // Update forward edge
            const edgeIndex = residualGraph.get(u)!.findIndex(([dest]) => dest === v);
            residualGraph.get(u)![edgeIndex][1] -= pathFlow;

            // Update backward edge
            const reverseEdge = residualGraph.get(v)!.find(([dest]) => dest === u);
            if (reverseEdge) {
                reverseEdge[1] += pathFlow;
            } else {
                residualGraph.get(v)!.push([u, pathFlow]);
            }
        }

        maxFlow += pathFlow;
    }

    return maxFlow;
}
