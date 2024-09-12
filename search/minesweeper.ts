/*
 * Author: IcarusTheFly (https://github.com/IcarusTheFly)
 * Minesweeper explanation can be found in: https://en.wikipedia.org/wiki/Minesweeper_(video_game)
 * This function will take a rectangular matrix filled with boolean values - the value for a cell
 * with a mine will be true, otherwise it will be false.
 * As a result it will return a rectangular matrix where each cell will have an integer that
 * counts all the mines in the adjacent cells
 * Two cells should share at least one corner to be considered adjacent
 */

/**
 * @function minesweeper
 * @description It counts the amount of mines surrounding every cell and returns a formatted matrix
 * @param {boolean[][]} matrix
 * @returns {number[][]} Matrix of numbers with the amount of mines surrounding each cell
 * @example minesweeper([
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ]) ===> [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1]
    ]
 */

export const minesweeper = (matrix: boolean[][]): number[][] => {
  const arrResult: number[][] = []

  for (let x = 0; x < matrix.length; x++) {
    const arrLine: number[] = []

    for (let y = 0; y < matrix[x].length; y++) {
      let minesInCell: number = 0

      for (let xi = x - 1; xi <= x + 1; xi++) {
        if (matrix[xi] !== undefined) {
          for (let yi = y - 1; yi <= y + 1; yi++) {
            if ((xi !== x || yi !== y) && matrix[xi][yi]) {
              minesInCell++
            }
          }
        }
      }
      arrLine.push(minesInCell)
    }
    arrResult.push(arrLine)
  }
  return arrResult
}
