/** * A function to get radian from the degree 
* @param {number} degree - The input integer 
* @return {number} radian of degree 
* @example degreeToRadian(45) => 0.7853 | degreeToRadian(90) => 1.5708
* @see https://en.m.wikipedia.org/wiki/Radian
* @author MohdFaisalBidda <https://github.com/MohdFaisalBidda> 
*/

export const degreeToRadian =(degrees:number):number =>{
  return (degrees * (Math.PI/180));
}