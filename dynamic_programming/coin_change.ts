export interface CoinChange {
  minCoins: number
  coins: number[]
}

/**
 * Given a set of categories of coins C and an amount of money S, the goal is:
 * to give change for S but to use a minimum number of coins. Suppose each category of coin has an infinite number of pieces.
 * @param money - amon of money.
 * @param coins - The coins that are available.
 * @returns CoinChange, the minimum number of coins, and which coins are selected
 */
export const coinChange = (money: number, coins: number[]): CoinChange => {
  const minCoins: number[] = Array(money + 1).fill(Infinity)
  const lastCoin: number[] = Array(money + 1).fill(-1)

  minCoins[0] = 0

  // Fill in the DP table
  for (const coin of coins) {
    for (let j = 0; j <= money; j++) {
      if (j >= coin) {
        if (minCoins[j] > 1 + minCoins[j - coin]) {
          minCoins[j] = 1 + minCoins[j - coin]
          lastCoin[j] = coin
        }
      }
    }
  }

  const res: CoinChange = {
    minCoins: minCoins[money],
    coins: []
  }

  let total: number = money
  while (total > 0) {
    res.coins.push(lastCoin[total])
    total -= lastCoin[total]
  }

  return res
}
