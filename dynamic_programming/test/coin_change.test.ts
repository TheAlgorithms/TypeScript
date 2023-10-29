import { coinChange } from "../coin_change";

describe('Coin Change problem ', () => {
    it('should return 0 if there are no coins', () => {
        const coins: number[] = [];
        const numCoins: number = coins.length;
        const targetAmount: number = 5;
        const ways = coinChange(coins, numCoins, targetAmount);
        expect(ways).toBe(0);
    });

    it('should return 1 when the target amount is 0', () => {
        const coins: number[] = [1, 2, 3];
        const numCoins: number = coins.length;
        const targetAmount: number = 0;
        const ways = coinChange(coins, numCoins, targetAmount);
        expect(ways).toBe(1);
    });

    it('should calculate the number of ways correctly', () => {
        const coins: number[] = [1, 2, 3];
        const numCoins: number = coins.length;
        const targetAmount: number = 5;
        const ways = coinChange(coins, numCoins, targetAmount);
        expect(ways).toBe(5);
    });

    it('should handle a large target amount', () => {
        const coins: number[] = [1, 2, 3];
        const numCoins: number = coins.length;
        const targetAmount: number = 1000;
        const ways = coinChange(coins, numCoins, targetAmount);
        expect(ways).toBeGreaterThan(0);
    });

    it('should handle a large number of coin denominations', () => {
        const coins: number[] = new Array(100).fill(1);
        const numCoins: number = coins.length;
        const targetAmount: number = 5;
        const ways = coinChange(coins, numCoins, targetAmount);
        expect(ways).toBeGreaterThan(0);
    });
});
