/*
  This script provides various methods to find the area of a particular shape
*/

/**
 * function to calculate the surface area of a cube
 * 
 * @param side side value of the cube
 * @return {number} surace area
 * @example surfaceAreaCube(1) = 6
 * @see [surfaceAreaCube](https://en.wikipedia.org/wiki/Area#Surface_area)
 * @author Owais28 <https://github.com/Owais28>
 */
const surfaceAreaCube = (side: number): number => {
  validateNumericParam(side, "side");
  return 6 * side ** 2;
};

/**
 *  function to calculate the surface area of a sphere
 * 
 * @param radius radius of the the spere
 * @return {number} - 4 * `PI` * `radius`^2
 * @example surfaceAreaSphere(5) = 314.1592653589793
 * @see [surfaceAreaSphere](https://en.wikipedia.org/wiki/Sphere)
 * @author Owais28 <https://github.com/Owais28>
 */
const surfaceAreaSphere = (radius: number): number => {
  validateNumericParam(radius, "radius");
  return 4.0 * Math.PI * radius ** 2.0;
};

/**
 *  function to calculate the area of a Rectangle
 * 
 * @param length length of the rectangle
 * @param width width of the rectangle
 * @return {Integer} `width` * `length`
 * @example areaRectangle(4) = 16
 * @see [areaRectangle](https://en.wikipedia.org/wiki/Area#Quadrilateral_area)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaRectangle = (length: number, width: number): number => {
  validateNumericParam(length, "Length");
  validateNumericParam(width, "Width");
  return width * length;
};

/**
 *  function to calculate the area of a Square
 * 
 * @param side side of the square
 * @return {number} `side`^2 | `side` ** 2
 * @example areaSquare(4) = 16
 * @see [areaSquare](https://en.wikipedia.org/wiki/Square)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaSquare = (side: number): number => {
  validateNumericParam(side, "square side");
  return side ** 2;
};

/**
 *  function to calculate the area of a Triangle
 * 
 * @param base base of the triangle
 * @param height height of the triangle
 * @return {number} `base` * `height` / 2.
 * @example areaTriangle(1.66, 3.44) = 2.8552
 * @see [areaTriangle](https://en.wikipedia.org/wiki/Area#Triangle_area)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaTriangle = (base: number, height: number): number => {
  validateNumericParam(base, "Base");
  validateNumericParam(height, "Height");
  return (base * height) / 2.0;
};

/**
 *  function to calculate the area of a Triangle with the all three sides given.
 * 
 * @param side1 side 1
 * @param side2 side 2
 * @param side3 side 3
 * @return {number} area of triangle.
 * @example areaTriangleWithAllThreeSides(5, 6, 7) = 14.7
 * @see [areaTriangleWithAllThreeSides](https://en.wikipedia.org/wiki/Heron%27s_formula)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaTriangleWithAllThreeSides = (
  side1: number,
  side2: number,
  side3: number
): number => {
  validateNumericParam(side1, "side1");
  validateNumericParam(side2, "side2");
  validateNumericParam(side3, "side3");
  if (
    side1 + side2 <= side3 ||
    side1 + side3 <= side2 ||
    side2 + side3 <= side1
  ) {
    throw new TypeError("Invalid Triangle sides.");
  }
  // Finding Semi perimeter of the triangle using formula
  const semi = (side1 + side2 + side3) / 2;

  // Calculating the area of the triangle
  const area = Math.sqrt(
    semi * (semi - side1) * (semi - side2) * (semi - side3)
  );
  return Number(area.toFixed(2));
};

/**
 *  function to calculate the area of a Parallelogram
 * 
 * @param base 
 * @param height 
 * @return {number} `base` * `height`
 * @example areaParallelogram(5, 6) = 24
 * @see [areaParallelogram](https://en.wikipedia.org/wiki/Area#Dissection,_parallelograms,_and_triangles)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaParallelogram = (base : number, height : number) : number => {
  validateNumericParam(base, "Base");
  validateNumericParam(height, "Height");
  return base * height;
};

/**
 *  function to calculate the area of a Trapezium
 * 
 * @param base1 base 1 of trapazium
 * @param base2 base 2 of trapazium
 * @param height height of trapazium
 * @return {number} (1 / 2) * (`base1` + `base2`) * `height`
 * @example areaTrapezium(5, 12, 10) = 85
 * @see [areaTrapezium](https://en.wikipedia.org/wiki/Trapezoid)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaTrapezium = (base1 : number, base2 : number, height : number) : number => {
  validateNumericParam(base1, "Base One");
  validateNumericParam(base2, "Base Two");
  validateNumericParam(height, "Height");
  return (1 / 2) * (base1 + base2) * height;
};

/**
 *  function to calculate the area of a Circle.
 * 
 * @param radius radius of the circle
 * @return {number} `Math.PI` * `radius` ** 2 
 * @example areaCircle(5, 12, 10) = 85
 * @see [areaCircle](https://en.wikipedia.org/wiki/Area_of_a_circle)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaCircle = (radius : number) : number => {
  validateNumericParam(radius, "Radius");
  return Math.PI * radius ** 2;
};

/**
 * function to calculate the area of a Circle.
 * 
 * @param diagonal1 first diagonal of rhombus
 * @param diagonal2 second diagonal of rhombus
 * @return {number} (1 / 2) * `diagonal1` * `diagonal2`
 * @example areaRhombus(12, 10) = 60
 * @see [areaRhombus](https://en.wikipedia.org/wiki/Rhombus)
 * @author Owais28 <https://github.com/Owais28>
 */
const areaRhombus = (diagonal1 : number, diagonal2 : number): number => {
  validateNumericParam(diagonal1, "diagonal one");
  validateNumericParam(diagonal2, "diagonal two");
  return (1 / 2) * diagonal1 * diagonal2;
};

/**
 * function to validate the given number
 * @param param 
 * @param paramName 
 */
const validateNumericParam = (param : number, paramName : string = "param") : void | Error => {
  if (param < 0) {
    throw new Error("The " + paramName + " only accepts non-negative values");
  }
};

export {
  surfaceAreaCube,
  surfaceAreaSphere,
  areaRectangle,
  areaSquare,
  areaTriangle,
  areaParallelogram,
  areaTrapezium,
  areaCircle,
  areaRhombus,
  areaTriangleWithAllThreeSides,
};
