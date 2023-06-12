import { Edge, kruskal } from "../kruskal";

describe("kruskal", () => {

  it("should return empty tree for empty graph", () => {
    expect(kruskal([], 0)).toStrictEqual([[], 0]);
  });

  it("should return empty tree for single element graph", () => {
    expect(kruskal([], 1)).toStrictEqual([[], 0]);
  });

  it("should return correct value for two element graph", () => {
    const edge = new Edge(0, 1, 5);
    expect(kruskal([edge], 2)).toStrictEqual([[edge], 5]);
  });

  let test_graph = (expected_tree_edges: Edge[], other_edges: Edge[], num_vertices: number, expected_cost: number) => {
    let [tree_edges, cost] = kruskal(expected_tree_edges.concat(other_edges), num_vertices);
    expect(cost).toStrictEqual(expected_cost);
    for (let expected_edge of expected_tree_edges) {
      expect(tree_edges.includes(expected_edge)).toBeTruthy();
    }
    for (let unexpected_edge of other_edges) {
      expect(tree_edges.includes(unexpected_edge)).toBeFalsy();
    }
  };

  it("should return the correct value", () => {
    let expected_tree_edges = [];
    expected_tree_edges.push(new Edge(0, 1, 7));
    expected_tree_edges.push(new Edge(0, 3, 5));
    expected_tree_edges.push(new Edge(1, 4, 7));
    expected_tree_edges.push(new Edge(2, 4, 5));
    expected_tree_edges.push(new Edge(3, 5, 6));
    expected_tree_edges.push(new Edge(4, 6, 9));

    let other_edges = [];
    other_edges.push(new Edge(1, 2, 8));
    other_edges.push(new Edge(1, 3, 9));
    other_edges.push(new Edge(3, 4, 15));
    other_edges.push(new Edge(4, 5, 8));
    other_edges.push(new Edge(5, 6, 11));

    test_graph(expected_tree_edges, other_edges, 7, 39);
  });

  it("should return the correct value", () => {
    let expected_tree_edges = [];
    expected_tree_edges.push(new Edge(0, 1, 3));
    expected_tree_edges.push(new Edge(1, 2, 2));
    expected_tree_edges.push(new Edge(2, 3, 2));
    expected_tree_edges.push(new Edge(2, 5, 8));
    expected_tree_edges.push(new Edge(4, 5, 8));
    expected_tree_edges.push(new Edge(5, 6, 7));
    expected_tree_edges.push(new Edge(6, 7, 4));
    expected_tree_edges.push(new Edge(7, 8, 1));
    expected_tree_edges.push(new Edge(8, 9, 3));

    let other_edges = [];
    other_edges.push(new Edge(0, 3, 6));
    other_edges.push(new Edge(0, 4, 9));
    other_edges.push(new Edge(1, 3, 4));
    other_edges.push(new Edge(1, 4, 9));
    other_edges.push(new Edge(2, 6, 9));
    other_edges.push(new Edge(3, 6, 9));
    other_edges.push(new Edge(4, 9, 18));
    other_edges.push(new Edge(5, 8, 9));
    other_edges.push(new Edge(5, 9, 10));
    other_edges.push(new Edge(6, 8, 5));
    other_edges.push(new Edge(7, 9, 4));

    test_graph(expected_tree_edges, other_edges, 10, 38);
  });

})

