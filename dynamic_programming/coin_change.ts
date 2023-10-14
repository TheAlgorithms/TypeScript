/**
 * Calculates the number of ways to make a target amount using given coin denominations.
 *
 * @param coins - An array of coin denominations.
 * @param numCoins - The number of different coin denominations.
 * @param targetAmount - The target sum to achieve.
 * @returns The number of ways to make the target amount with the given coins.
 */
export function coinChange(coins: number[], numCoins: number, targetAmount: number): number {
    
    const dp: number[] = new Array(targetAmount + 1).fill(0);
    dp[0] = 1;

    for (let coinIndex = 0; coinIndex < numCoins; coinIndex++) {
        const coinValue = coins[coinIndex];
        for (let currentAmount = coinValue; currentAmount <= targetAmount; currentAmount++) {
            dp[currentAmount] += dp[currentAmount - coinValue];
        }
    }

    return dp[targetAmount];
}