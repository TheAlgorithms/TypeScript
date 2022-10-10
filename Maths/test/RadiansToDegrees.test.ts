import {radiansToDegrees} from '../RadiansToDegrees'; 
  
 test("RadiansToDegrees", () => {
  expect(radiansToDegrees(0)).toBe(0);
  expect(radiansToDegrees(0.7853981633974483)).toBe(45);
  expect(radiansToDegrees(1.5707963267948966)).toBe(90);
});