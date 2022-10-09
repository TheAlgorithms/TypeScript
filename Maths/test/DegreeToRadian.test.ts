import {degreeToRadian} from '../DegreeToRadian'; 
  
 test("DegreeToRadian", () => {
  expect(degreeToRadian(0)).toBe(0);
  expect(degreeToRadian(45)).toBe(0.7853981633974483);
  expect(degreeToRadian(90)).toBe(1.5707963267948966);
});