import {
  nthFibonacciUsingFormula,
  nthFibonacci,
  nthFibonacciRecursively
} from '../fibonacci'

const test = (func: (n: number) => number) =>
  it.each([
    [0, 0],
    [1, 1],
    [2, 1],
    [5, 5],
    [10, 55],
    [15, 610]
  ])('fib(%i) = %i', (n, expected) => expect(func(n)).toBe(expected))
describe('Fibonacci iterative', () => test(nthFibonacci))
describe('Fibonacci recursive', () => test(nthFibonacciRecursively))
describe('Fibonacci Using formula', () => test(nthFibonacciUsingFormula))
