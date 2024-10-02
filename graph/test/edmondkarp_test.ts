import { edmondsKarp } from '../edmondsKarp'

describe('edmondsKarp', () => {
  const init_flow_network = (N: number): number[][] => {
    const graph = Array.from({ length: N }, () => Array(N).fill(0));
    return graph;
  }

  const add_capacity = (
    graph: number[][],
    u: number,
    v: number,
    capacity: number
  ) => {
    graph[u][v] = capacity;
  }

  it('should return the correct maximum flow value for basic graph', () => {
    const graph = init_flow_network(6);
    add_capacity(graph, 0, 1, 16);
    add_capacity(graph, 0, 2, 13);
    add_capacity(graph, 1, 2, 10);
    add_capacity(graph, 1, 3, 12);
    add_capacity(graph, 2, 1, 4);
    add_capacity(graph, 2, 4, 14);
    add_capacity(graph, 3, 2, 9);
    add_capacity(graph, 3, 5, 20);
    add_capacity(graph, 4, 3, 7);
    add_capacity(graph, 4, 5, 4);
    expect(edmondsKarp(graph, 0, 5)).toBe(23);
  });

  it('should return the correct maximum flow value for single element graph', () => {
    const graph = init_flow_network(1);
    expect(edmondsKarp(graph, 0, 0)).toBe(0);
  });

  const linear_flow_network = init_flow_network(4);
  add_capacity(linear_flow_network, 0, 1, 10);
  add_capacity(linear_flow_network, 1, 2, 5);
  add_capacity(linear_flow_network, 2, 3, 15);
  test.each([
    [0, 3, 5],  
    [0, 2, 5],  
    [1, 3, 5],  
    [1, 2, 5],  
  ])(
    'correct result for linear flow network with source node %i and sink node %i',
    (source, sink, maxFlow) => {
      expect(edmondsKarp(linear_flow_network, source, sink)).toBe(maxFlow);
    }
  );

  const disconnected_flow_network = init_flow_network(4);
  add_capacity(disconnected_flow_network, 0, 1, 10);
  add_capacity(disconnected_flow_network, 2, 3, 5);
  test.each([
    [0, 3, 0],  
    [1, 2, 0],  
    [2, 3, 5],  
  ])(
    'correct result for disconnected flow network with source node %i and sink node %i',
    (source, sink, maxFlow) => {
      expect(edmondsKarp(disconnected_flow_network, source, sink)).toBe(maxFlow);
    }
  );
  
  const cyclic_flow_network = init_flow_network(5);
  add_capacity(cyclic_flow_network, 0, 1, 10);
  add_capacity(cyclic_flow_network, 1, 2, 5);
  add_capacity(cyclic_flow_network, 2, 0, 7);  
  add_capacity(cyclic_flow_network, 2, 3, 10);
  add_capacity(cyclic_flow_network, 3, 4, 10);
  test.each([
    [0, 4, 10], 
    [1, 4, 10], 
    [2, 4, 10], 
  ])(
    'correct result for cyclic flow network with source node %i and sink node %i',
    (source, sink, maxFlow) => {
      expect(edmondsKarp(cyclic_flow_network, source, sink)).toBe(maxFlow);
    }
  );
});
