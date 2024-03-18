import { logTwo } from '../log_two'

describe('LogTwoTests', () => {
  test.each([...Array(100).keys()].map((i) => [i + 1]))('log2(%i)', (input) => {
    expect(logTwo(input)).toBe(Math.floor(Math.log2(input)))
  })
})
