import {degreesToRadians} from '../degrees_to_radians'; 
import { FarenheitToCelcius } from '../farenheit_to_celcius';
  
 test("FarenheitToCelcius", () => {
  expect(FarenheitToCelcius(0)).toBe(-17.78);
  expect(degreesToRadians(32)).toBe(0);
});
