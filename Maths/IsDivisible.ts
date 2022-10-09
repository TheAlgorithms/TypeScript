/**
 * Function to check the number is even or odd.
 * @param num The input integer
 * @return number is even or odd 
 * @example isDivisible(1) => Odd | isDivisible(2) => Even
 * @see [Even-Odd](https://www.programiz.com/javascript/examples/even-odd)
 * @author MohdFaisalBidda <https://github.com/MohdFaisalBidda>
 */

export const isDivisible =(num:number):number =>{
  if((num % 2) === 0) return "Number is Even";
  else return "Number is Odd";
  
};
