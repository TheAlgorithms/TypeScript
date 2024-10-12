interface Node {
    id: number;
    g: number; // Cost from start to this node
    h: number; // Heuristic cost from this node to target
    f: number; // Total cost
    parent?: Node; // Parent node for path reconstruction
}

class GraphAStar {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex: number) {
        this.adjList.set(vertex, []);
    }

    addEdge(v1: number, v2: number) {
        this.adjList.get(v1)?.push(v2);
        this.adjList.get(v2)?.push(v1); // for undirected graph
    }

    heuristic(node: number, target: number): number {
        // This is a placeholder heuristic; replace with an actual heuristic function
        return Math.abs(target - node);
    }

    astar(start: number, target: number): number[] | null {
        const openSet: Node[] = [];
        const closedSet: Set<number> = new Set();

        const startNode: Node = { id: start, g: 0, h: this.heuristic(start, target), f: 0 };
        openSet.push(startNode);

        while (openSet.length) {
            // Get the node with the lowest f score
            openSet.sort((a, b) => a.f - b.f);
            const currentNode = openSet.shift()!;

            if (currentNode.id === target) {
                const path: number[] = [];
                let temp: Node | undefined = currentNode;

                while (temp) {
                    path.push(temp.id);
                    temp = temp.parent;
                }

                return path.reverse(); // Return reversed path
            }

            closedSet.add(currentNode.id);

            const neighbors = this.adjList.get(currentNode.id) || [];
            for (const neighborId of neighbors) {
                if (closedSet.has(neighborId)) continue;

                const gScore = currentNode.g + 1; // Assuming cost is 1 for each edge
                const hScore = this.heuristic(neighborId, target);
                const fScore = gScore + hScore;

                const existingNodeIndex = openSet.findIndex(node => node.id === neighborId);
                if (existingNodeIndex === -1 || fScore < openSet[existingNodeIndex].f) {
                    const neighborNode: Node = {
                        id: neighborId,
                        g: gScore,
                        h: hScore,
                        f: fScore,
                        parent: currentNode
                    };

                    if (existingNodeIndex === -1) {
                        openSet.push(neighborNode);
                    } else {
                        openSet[existingNodeIndex] = neighborNode;
                    }
                }
            }
        }

        return null; // No path found
    }
}

// Example usage
const graphAStar = new GraphAStar();
graphAStar.addVertex(1);
graphAStar.addVertex(2);
graphAStar.addVertex(3);
graphAStar.addVertex(4);
graphAStar.addEdge(1, 2);
graphAStar.addEdge(2, 3);
graphAStar.addEdge(3, 4);
console.log(graphAStar.astar(1, 4)); // Output: [1, 2, 3, 4]
