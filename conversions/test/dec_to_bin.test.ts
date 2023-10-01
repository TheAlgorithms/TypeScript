import { decimalToBinary } from "../dec_to_bin"

describe('Decimal To Binary conversion tests', () => { 
    it.each([
        [35, '100011'],
        [1, '1'],
        [1000, '1111101000'],
        [2, '10'],
        [17, '10001'],
      ])(
        'The Binary representation of %i is %s',
        (decimal, expectedBinary) => {
          const res = decimalToBinary(decimal);
          expect(res).toBe(expectedBinary);
        }
      );
      
})