import { CoinChange, coinChange } from '../coin_change'

interface TestCase {
  money: number
  coins: number[]
  expected: CoinChange
}

const cases: TestCase[] = [
  {
    money: 13,
    coins: [7, 2, 3, 6],
    expected: {
      minCoins: 2,
      coins: [6, 7]
    }
  },
  {
    money: 10,
    coins: [1, 5],
    expected: {
      minCoins: 2,
      coins: [5, 5]
    }
  }
]

describe('Coin Change Algorithm Test', () => {
  test.each(cases)(
    'given money: $money, and coins: $coins the minimum coin change should return $expected',
    ({ money, coins, expected }) => {
      const result = coinChange(money, coins)
      expect(result).toEqual(expected)
    }
  )
})
