/**
 * @function FarenheitToCelcius
 * @description Convert Farenheit to Celcius.
 * @param {number} num - A real number in Farenheit.
 * @return {number} - The number converted in Celcius rounded to the second decimal number.
 * @see https://en.wikipedia.org/wiki/Fahrenheit
 * @example FarenheitToCelcius(0) = -17.67
 * @example FarenheitToCelcius(32) = 0
 * @example FarenheitToCelcius(50) = 10
 */
 export const FarenheitToCelcius = (num: number): number => {
    const res = (num-32)/1.8;
    return parseFloat(res.toFixed(2));
};
