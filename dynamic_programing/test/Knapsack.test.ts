import { knapsack } from "../Knapsack";

describe("Knapsack Algorithm", () => {
  it("test 1", () => {
    var values = [5, 6, 4, 6, 5, 2];
    var weights = [6, 5, 6, 6, 3, 7];
    var totalWeight = 15;
    var numberOfItems = values.length;
    expect(knapsack(numberOfItems, totalWeight, weights, values)).toBe(17);
  });

  it("test 1", () => {
    var values = [60, 100, 120];
    var weights = [10, 20, 30];
    var totalWeight = 50;
    var numberOfItems = values.length;
    expect(knapsack(numberOfItems, totalWeight, weights, values)).toBe(220);
  });
  it("test 1", () => {
    var values = [30, 50, 60];
    var weights = [3, 4, 5];
    var totalWeight = 8;
    var numberOfItems = values.length;
    expect(knapsack(numberOfItems, totalWeight, weights, values)).toBe(90);
  });
  it("test 1", () => {
    var values = [1000000000, 1000000000, 1000000000, 1000000000, 1000000000];
    var weights = [1, 1, 1, 1, 1];

    var totalWeight = 5;
    var numberOfItems = values.length;
    expect(knapsack(numberOfItems, totalWeight, weights, values)).toBe(
      5000000000
    );
  });
});
