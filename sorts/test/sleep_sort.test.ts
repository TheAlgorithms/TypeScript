import { sleepSort } from '../sleep_sort';

describe('SleepSort', () => {
  test.each([
    { arr: [1], expectedResult: [1] },
    { arr: [2, 1], expectedResult: [1, 2] },
    { arr: [3, 1, 2], expectedResult: [1, 2, 3] },
    { arr: [3, 4, 1, 2], expectedResult: [1, 2, 3, 4] }
  ])(
    'The return value of $arr should be $expectedResult',
    async ({ arr, expectedResult }) => {
      expect(await sleepSort(arr)).toStrictEqual(expectedResult);
    }
  );
});
