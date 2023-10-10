import { sleepSort } from "../sleep_sort";

describe("Sleep Sort", () => {
  it("should return the array in increasing order for randomly placed numbers", async () => {
    const result = await sleepSort([4, 1, 8, 10, 3, 2, 5, 0, 7, 6, 9]);
    console.log(result)
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return the array in increasing order for an array sorted in decreasing order", async () => {
    const result = await sleepSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
    console.log(result)
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should return the array in increasing order for an array sorted in decreasing order", async () => {
    const result = await sleepSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("Shoud return the same array for an array of length 1", async () => {
    const result = await sleepSort([1])
    expect(result).toStrictEqual([1])
  })

  it("Shoud return an empty array for an empty input array", async () => {
    const result = await sleepSort([])
    expect(result).toStrictEqual([])
  })
});