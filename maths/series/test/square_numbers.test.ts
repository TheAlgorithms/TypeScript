import { SquareNumbers } from "../square_numbers";

describe("SquareNumbers", () => {
  it("should return the first 15 square numbers", () => {
    expect(SquareNumbers(15)).toStrictEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225]);
  })

  it("should return the first 7 square numbers", () => {
    expect(SquareNumbers(7)).toStrictEqual([1, 4, 9, 16, 25, 36, 49])
  })

  it("should return zero square numbers", () => {
    expect(SquareNumbers(0)).toStrictEqual([])
  })
})
