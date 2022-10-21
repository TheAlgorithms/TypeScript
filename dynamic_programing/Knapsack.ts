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
  // Declaring a data structure to store calculated states/values
  var dp: number[][] = new Array(numberOfItems + 1);

  for (var i = 0; i < dp.length; i++) {
    // Placing an array at each index of dp to make it a 2d matrix
    dp[i] = new Array(totalWeight + 1);
  }

  // Loop traversing each state of dp
  for (var i = 0; i < numberOfItems; i++) {
    for (var j = 0; j <= totalWeight; j++) {
      if (i == 0) {
        if (j >= weights[i]) {
          // grab the first item if it's weight is less than remaining weight (j)
          dp[i][j] = values[i];
          continue;
        }
        // if weight[i] is more than remaining weight (j) leave it
        dp[i][j] = 0;
        continue;
      }

      if (j < weights[i]) {
        // weight of current item (weights[i]) is more than remaining weight (j), leave the current item and just carry on previous items
        dp[i][j] = dp[i - 1][j];
        continue;
      }
      // select the maximum of (if current weight is collected thus adding it's value) and (if current weight is not collected thus not adding it's value)
      dp[i][j] = Math.max(dp[i - 1][j - weights[i]] + values[i], dp[i - 1][j]);
    }
  }

  // Return the final maximized value at last position of dp matrix
  return dp[numberOfItems - 1][totalWeight];
};
