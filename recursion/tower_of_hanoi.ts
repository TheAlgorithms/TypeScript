/**
 * @author : dev-madhurendra<https://github.com/dev-madhurendra>
 * @see : https://en.wikipedia.org/wiki/Tower_of_Hanoi
 * @param {number} n 
 * @param {string} from 
 * @param {string} to 
 * @param {string} aux 
 * @param {string[]} output 
 * @returns {string[]}
 * 
 */
export const TowerOfHanoi = (
    n: number,
    from: string,
    to: string,
    aux: string,
    output: string[] = []
  ): string[] => {
    if (n === 1) {
      output.push(`Move disk 1 from rod ${from} to rod ${to}`);
      return output;
    }
    TowerOfHanoi(n - 1, from, aux, to, output);
    output.push(`Move disk ${n} from rod ${from} to rod ${to}`);
    TowerOfHanoi(n - 1, aux, to, from, output);
    return output;
  };
  