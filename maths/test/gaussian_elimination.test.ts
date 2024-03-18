import { gaussianElimination } from '../gaussian_elimination'

describe('gaussianElimination', () => {
  it('should solve system of linear equations', () => {
    const A: number[][] = [
      [3.0, 2.0, -4.0, 3.0],
      [2.0, 3.0, 3.0, 15.0],
      [5.0, -3, 1.0, 14.0]
    ]

    let solution: number[] = gaussianElimination(A)
    solution = solution.map((x) => Math.round(x))

    expect(solution.map((x) => Math.round(x))).toEqual([3, 1, 2])
  })

  it('should solve a 2x2 system of linear equations', () => {
    const A: number[][] = [
      [2.0, 1.0, 5.0],
      [1.0, -3.0, 6.0]
    ]

    let solution: number[] = gaussianElimination(A)
    solution = solution.map((x) => Math.round(x))

    expect(solution.map((x) => Math.round(x))).toEqual([3, -1])
  })

  it('should handle a system with no solution', () => {
    const A: number[][] = [
      [1.0, 2.0, 3.0, 4.0],
      [2.0, 4.0, 6.0, 7.0],
      [3.0, 6.0, 9.0, 10.0]
    ]

    let solution: number[] = gaussianElimination(A)
    solution = solution.filter((value) => !isNaN(value))

    expect(solution).toEqual([])
  })
})
