/**
 * Calculates the number of ways to make a target amount using given coin denominations.
 *
 * @param coins - An array of coin denominations.
 * @param numberOfWays - The number of ways to represent the target amount using the given coins.
 * @param targetAmount - The target sum to achieve.
 * @returns The number of ways to make the target amount with the given coins.
 */
export function coinChange(coins: number[], numberOfWays: number, targetAmount: number): number {
    
    const dp: number[] = new Array(targetAmount + 1).fill(0);
    dp[0] = 1;

    for (let coinIndex = 0; coinIndex < numberOfWays; coinIndex++) {
        const coinValue = coins[coinIndex];
        for (let currentAmount = coinValue; currentAmount <= targetAmount; currentAmount++) {
            dp[currentAmount] += dp[currentAmount - coinValue];
        }
    }

    return dp[targetAmount];
}
