/**
 * @function parseNestedBrackets
 * @description Parse nested brackets algorithm for a string.
 * @param {string} text - text to parse
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
  text: string,
  brackets: { openBrackets: string; closingBrackets: string } = {
    openBrackets: "<",
    closingBrackets: ">",
  }
) => {
  let array: string[] = []; // The array of the tags in this present floor.
  let prFloor = 0; // The present floor.
  let begin = 0, // The begin index of the tag.
    end = 0; // The end index of the tag.
  for (let i = 0; i < text.length; i++) {
    if (text[i] === brackets.openBrackets) {
      prFloor++;
      if (prFloor === 1) begin = i;
    } else if (text[i] === brackets.closingBrackets) {
      if (prFloor === 1) {
        end = i;
        const tag = text.slice(begin + 1, end);
        // push the tag in this present floor.
        array.push(`${brackets.openBrackets}${tag}${brackets.closingBrackets}`);
        // push the array of the tags in the next floor.
        array = array.concat(parseNestedBrackets(tag, brackets));
      }
      prFloor--;
    }
  }
  return array;
};
