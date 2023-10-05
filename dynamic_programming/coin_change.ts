
/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @see : https://leetcode.com/problems/coin-change/description/
 * @param coins 
 * @param amount 
 */
export const coinChange = (coins: number[], amount: number) => {
    // dp[i] will be storing the 
    // number of solutions for value i. 
    // We need n+1 rows as the dp 
    // is constructed in bottom up manner 
    // using the base case (sum = 0) 
    let dp = Array(amount + 1).fill(Infinity); 

    // Base case (If given value is 0) 
    dp[0] = 0; 

    // Pick all coins one by one and 
    // update the dp[] values after 
    // the index greater than or equal 
    // to the value of the picked coin 
    for(let i = 0; i < dp.length; i++) {
        for(let coin of coins) {
            if(i - coin >= 0) 
                dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; 
}