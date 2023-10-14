import { CubicNumbers } from "../cubic_numbers"; 

describe("CubicNumbers", () => {
  it("should return the first 10 cubic numbers", () => {
    expect(CubicNumbers(10)).toStrictEqual([1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]);
  })

  it("should return the first 7 cubic numbers", () => {
    expect(CubicNumbers(7)).toStrictEqual([1, 8, 27, 64, 125, 216, 343])
  })

  it("should return zero cubic numbers", () => {
    expect(CubicNumbers(0)).toStrictEqual([])
  })
})
