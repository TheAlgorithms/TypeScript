/**
 * @function areaOfSquare
 * @description Calculate the area of a square.
 * @param {number} side - The side of the square.
 * @returns {number} - Area of the square.
 * @throws {RangeError} - when side is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Square
 * @example areaOfSquare(4) => 16
 */
export function areaOfSquare(side: number): number{
    if(side<=0){
        throw new RangeError('Side must be non-zero positive value');
    }
    return side*side;
}

/**
 * @function areaOfRectangle
 * @description Calculate the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} - Area of the rectangle.
 * @throws {RangeError} - when length or width is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Rectangle
 * @example areaOfRectangle(4, 5) => 20
 */
export function areaOfRectangle(length: number,  width:number):number{
    if(length<=0 || width<=0){
        throw new RangeError('Length and width must be non-zero positive values');
    }
    return length*width;
}

/**
 * @function areaOfCircle
 * @description Calculate the area of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - Area of the circle.
 * @throws {RangeError} - when radius is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Circle
 * @example areaOfCircle(7) => 153.93804002589985
 */
export function areaOfCircle(radius:number):number{
    if(radius<=0){
        throw new RangeError('Radius must be non-zero positive value');
    }
    return Math.PI*radius*radius;
}

/**
 * @function areaOfTriangle
 * @description Calculate the area of a triangle.
 * @param {number} base - the base of the triangle.
 * @param {number} height - the height of the triangle.
 * @returns {number} - Area of the triangle.
 * @throws {RangeError} - when base or height is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Triangle
 * @example areaOfTriangle(4, 5) => 10
 */
export function areaOfTriangle(base: number, height:number): number{
    if(base<=0 || height<=0){
        throw new RangeError('Base and height must be non-zero positive values');
    }

    return 0.5*base*height;
}

/**
 * @function areaOfTrapezoid
 * @description Calculate the area of a trapezoid.
 * @param {number} a - the length of the first base of the trapezoid.
 * @param {number} b - the length of the second base of the trapezoid.
 * @param {number} height - the height of the trapezoid.
 * @returns {number} - Area of the trapezoid.
 * @throws {RangeError} - when a, b or height is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Trapezoid
 * @example areaOfTrapezoid(4, 5, 6) => 27
 */

export function areaOfTrapezoid(a: number, b:number, height:number):number{
    if(a<=0 || b<=0 || height<=0){
        throw new RangeError('Bases and height must be non-zero positive values');
    }

    return 0.5*(a+b)*height;
}

/**
 * @function areaOfEclipse
 * @description Calculate the area of an eclipse.
 * @param {number} a - the length of the semi-major axis of the eclipse.
 * @param {number} b - the length of the semi-minor axis of the eclipse.
 * @returns {number} - Area of the eclipse.
 * @throws {RangeError} - when a or b is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Ellipse
 * @example areaOfEclipse(4, 5) => 62.83185307179586
 */
export function areaOfEclipse(a: number, b:number):number{
    if(a<=0 || b<=0){
        throw new RangeError('Semi-major and semi-minor axes must be non-zero positive values');
    }

    return Math.PI*a*b;
}


/**
 * @function areaOfParallelogram
 * @description Calculate the area of a parallelogram.
 * @param {number} base - the base of the parallelogram.
 * @param {number} height - the height of the parallelogram.
 * @returns {number} - Area of the parallelogram.
 * @throws {RangeError} - when base or height is 0 or negative.
 * @see https://en.wikipedia.org/wiki/Parallelogram
 * @example areaOfParallelogram(4, 5) => 20
 */
export function areaOfParallelogram(base: number, height:number): number{
    if(base<=0 || height<=0){
        throw new RangeError('Base and height must be non-zero positive values');
    }

    return base*height;
}