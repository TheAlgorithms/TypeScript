/**
 * @function parseNestedBrackets
 * @description Parse nested brackets algorithm for a string.
 * @param {string} w - string to parse
 * @param { openBrackets: string; closingBrackets: string } brackets - object containing the open and closing brackets
 * @returns {string[]} - array of the tags
 * @example parseNestedBrackets(`<MAIN hoge><MAIN2 fuga>`) => [ '<MAIN hoge>', '<MAIN2 fuga>' ]
 * @example parseNestedBrackets(
 *  `THIS IS SAMPLE TEXT(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))`,
 *  { openBrackets: '(', closingBrackets: ')' }) => 
 *  [
      '(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))',
      '(ITEM fuga hoge)',
      '(ITEM2 nogami(ABBR))',
      '(ABBR)'
    ]
 */

export const parseNestedBrackets = (
  w: string,
  brackets: { openBrackets: string; closingBrackets: string } = {
    openBrackets: "<",
    closingBrackets: ">",
  }
) => {
  let array: string[] = [];
  let prFloor = 0;
  let begin = 0,
    end = 0;
  for (let i = 0; i < w.length; i++) {
    if (w[i] === brackets.openBrackets) {
      prFloor++;
      if (prFloor === 1) begin = i;
    } else if (w[i] === brackets.closingBrackets) {
      if (prFloor === 1) {
        end = i;
        const v = w.slice(begin + 1, end);
        array.push(`${brackets.openBrackets}${v}${brackets.closingBrackets}`);
        array = array.concat(parseNestedBrackets(v, brackets));
      }
      prFloor--;
    }
  }
  return array;
};
