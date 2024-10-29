import {
  areaOfSquare,
  areaOfRectangle,
  areaOfCircle,
  areaOfTriangle,
  areaOfTrapezoid,
  areaOfEclipse,
  areaOfParallelogram
} from '../area_of_various_shapes'

describe('area of square', () => {
  test.each([
    [4, 16],
    [7, 49],
    [10, 100]
  ])(`areaOfSquare(%i) should return %d`, (side, expected) => {
    expect(areaOfSquare(side)).toBe(expected)
  })

  test('should throw error on invalid input', () => {
    expect(() => areaOfSquare(0)).toThrow(RangeError)
  })
})

describe('area of rectangle', () => {
  test.each([
    [4, 5, 20],
    [7, 10, 70],
    [10, 15, 150]
  ])(`areaOfRectangle(%d,%d) should return %d`, (length, width, expected) => {
    expect(areaOfRectangle(length, width)).toBe(expected)
  })

  test('should throw error on invalid input', () => {
    expect(() => areaOfRectangle(0, -1)).toThrow(RangeError)
  })
})

describe('area of circle', () => {
  test.each([
    [7, Math.PI * 7 * 7],
    [10, Math.PI * 10 * 10],
    [15, Math.PI * 15 * 15]
  ])(`areaOfCircle(%d) should return %d`, (radius, expected) => {
    expect(areaOfCircle(radius)).toBe(expected)
  })

  test('Should throw error on invalid input', () => {
    expect(() => areaOfCircle(-5)).toThrow(RangeError)
  })
})

describe('area of triangle', () => {
  test.each([
    [4, 5, 10],
    [7, 10, 35],
    [10, 15, 75]
  ])(`areaOfTriangle(%d,%d) should return %d`, (base, height, expected) => {
    expect(areaOfTriangle(base, height)).toBe(expected)
  })

  test('Should throw error on invalid input', () => {
    expect(() => areaOfTriangle(0, -1)).toThrow(RangeError)
  })
})

describe('area of trapezoid', () => {
  test.each([
    [4, 5, 6, 27],
    [5, 8, 4, 26],
    [10, 20, 15, 225]
  ])(
    `areaOfTrapezoid(%d, %d, %d) should return %d`,
    (a, b, height, expected) => {
      expect(areaOfTrapezoid(a, b, height)).toBe(expected)
    }
  )

  test('Should throw error on invalid input', () => {
    expect(() => areaOfTrapezoid(2, 3, -5)).toThrow(RangeError)
  })
})

describe('area of eclipse', () => {
  test.each([
    [4, 5, Math.PI * 4 * 5],
    [7, 10, Math.PI * 7 * 10],
    [10, 15, Math.PI * 10 * 15]
  ])(`areaOfEclipse(%d, %d) should return %d`, (a, b, expected) => {
    expect(areaOfEclipse(a, b)).toBe(expected)
  })

  test('Should throw error on invalid input', () => {
    expect(() => areaOfEclipse(-5, 2)).toThrow(RangeError)
  })
})

describe('area of parallelogram', () => {
    test.each([
        [4,5,20],
        [7,10,70],
        [10,15,150]
    ])(`areaOfParallelogram(%d,%d) should return %d`, (base, height, expected) => {
        expect(areaOfParallelogram(base, height)).toBe(expected)
    })

    test('Should throw error on invalid input', () => {
        expect(() => areaOfParallelogram(0, -1)).toThrow(RangeError)
    })
})