import {degreeToRadian} from '../DegreeToRadian'; 
  
 describe('DegreeToRadian', () => { 
  test('should return correct value', () => {         
     expect(degreeToRadian(45)).toBe(0.7854);
     expect(degreeToRadian(90)).toBe(1.5708);
     expect(degreeToRadian(0)).toBe(0);
   }); 
 });