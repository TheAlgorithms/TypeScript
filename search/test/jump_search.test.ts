import { jumpSearch } from "../jump_search";

describe("Jump search", () => {
  test.each([
    [[], 1, -1],
    [[1, 2, 3, 4, 5], 4, 3],
    [[1, 3, 5, 8, 9], 4, -1],
  ])(
    "of %o , searching for %o, expected %i",
    (array: any[], target: any, index: number) => {
      expect(jumpSearch(array, target)).toStrictEqual(index)
    },
  );
});
