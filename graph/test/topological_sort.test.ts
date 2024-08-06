import {
    createGraph,
    addEdge,
    topologicalSortUtil,
    topologicalSort,
  } from "../topological_sort"; // Import your functions
  
  describe("Topological Sorting", () => {
    it("should correctly perform topological sorting on a simple graph", () => {
      const graph = createGraph(6);
  
      addEdge(graph, 5, 2);
      addEdge(graph, 5, 0);
      addEdge(graph, 4, 0);
      addEdge(graph, 4, 1);
      addEdge(graph, 2, 3);
      addEdge(graph, 3, 1);
  
      const result = topologicalSort(graph);
      expect(result).toEqual([5, 4, 2, 3, 1, 0]);
    });
  
    it("should handle a graph with multiple components", () => {
      const graph = createGraph(6);
  
      addEdge(graph, 0, 1);
      addEdge(graph, 1, 2);
      addEdge(graph, 3, 4);
  
      const result = topologicalSort(graph);
      expect(result).toEqual([5, 3, 4, 0, 1, 2]);
    });
  
    it("should handle an empty graph", () => {
      const graph = createGraph(0);
  
      const result = topologicalSort(graph);
      expect(result).toEqual([]);
    });
  
    it("should handle a single-node graph", () => {
      const graph = createGraph(1);
  
      const result = topologicalSort(graph);
      expect(result).toEqual([0]);
    });
  });
  