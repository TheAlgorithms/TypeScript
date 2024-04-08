/**
 * Solves the 0-1 Knapsack Problem.
 * @param capacity Knapsack capacity
 * @param weights Array of item weights
 * @param values Array of item values
 * @returns Maximum value subset such that sum of the weights of this subset is smaller than or equal to capacity
 * @throws If weights and values arrays have different lengths
 * @see [Knapsack](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/)
 * @example knapsack(3, [3, 4, 5], [30, 50, 60]) // Output: 90
 */

export const knapsack = (
  capacity: number,
  weights: number[],
  values: number[]
): number => {
  if (weights.length !== values.length) {
    throw new Error(
      'Weights and values arrays should have the same number of elements'
    )
  }

  const numberOfItems: number = weights.length

  // Initializing a 2D array to store calculated states/values
  const dp: number[][] = new Array(numberOfItems + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0))

  // Loop traversing each state of dp
  for (let itemIndex = 1; itemIndex <= numberOfItems; itemIndex++) {
    const weight = weights[itemIndex - 1]
    const value = values[itemIndex - 1]
    for (
      let currentCapacity = 1;
      currentCapacity <= capacity;
      currentCapacity++
    ) {
      if (weight <= currentCapacity) {
        // Select the maximum value of including the current item or excluding it
        dp[itemIndex][currentCapacity] = Math.max(
          value + dp[itemIndex - 1][currentCapacity - weight],
          dp[itemIndex - 1][currentCapacity]
        )
      } else {
        // If the current item's weight exceeds the current capacity, exclude it
        dp[itemIndex][currentCapacity] = dp[itemIndex - 1][currentCapacity]
      }
    }
  }

  // Return the final maximized value at the last position of the dp matrix
  return dp[numberOfItems][capacity]
}
