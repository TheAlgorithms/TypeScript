import { FibonacciNumbers } from "../fibonacci_numbers"; 

describe("FibonacciNumbers", () => {
  it("should return the first 10 fibonacci numbers", () => {
    expect(FibonacciNumbers(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  })

  it("should return the first 5 fibonacci numbers", () => {
    expect(FibonacciNumbers(5)).toStrictEqual([0, 1, 1, 2, 3])
  })

  it("should return zero fibonacci numbers", () => {
    expect(FibonacciNumbers(0)).toStrictEqual([])
  })
})
