/**
 * @function knapsack
 * @description Given weights and values of n (numberOfItems) items, put these items in a knapsack of capacity totalWeight to get the maximum total value in the knapsack. In other words, given two integer arrays values[0..n-1] and weights[0..n-1] which represent values and weights associated with n items respectively. Also given an integer totalWeight which represents knapsack capacity, find out the maximum value subset of values[] such that sum of the weights of this subset is smaller than or equal to totalWeight. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).
 * @Complexity_Analysis
 * Space complexity - O(1)
 * Time complexity
 *      Best case   -   O(numberOfItems * totalWeight)
 *      Average case   -   O(numberOfItems * totalWeight)
 *      Worst case   -   O(numberOfItems * totalWeight)
 *
 * @return maximum value subset of values[] such that sum of the weights of this subset is smaller than or equal to totalWeight.
 * @see [Knapsack](https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/)
 * @example knapsack(3, 8, [3, 4, 5], [30, 50, 60]) = 90
 */
export const knapsack = (
  numberOfItems: number,
  totalWeight: number,
  weights: number[],
  values: number[]
) => {
  var dp: number[][] = new Array(numberOfItems + 1);

  for (var i = 0; i < dp.length; i++) {
    dp[i] = new Array(totalWeight + 1);
  }

  for (var i = 0; i < numberOfItems; i++) {
    for (var j = 0; j <= totalWeight; j++) {
      if (i == 0) {
        if (j >= weights[i]) {
          dp[i][j] = values[i];
          continue;
        }
        dp[i][j] = 0;
        continue;
      }

      if (j < weights[i]) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j - weights[i]] + values[i], dp[i - 1][j]);
    }
  }
  return dp[numberOfItems - 1][totalWeight];
};
