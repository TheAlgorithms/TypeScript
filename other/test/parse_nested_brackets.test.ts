import { parseNestedBrackets } from '../parse_nested_brackets'

describe('parseNestedBrackets', () => {
  it('should return an array of the tags', () => {
    expect(parseNestedBrackets('<MAIN hoge><MAIN2 fuga>')).toEqual([
      '<MAIN hoge>',
      '<MAIN2 fuga>'
    ])
  })
  it('should return an array of the tags (nested)', () => {
    expect(
      parseNestedBrackets(
        `THIS IS SAMPLE TEXT(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))`,
        '(',
        ')'
      )
    ).toEqual([
      '(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))',
      '(ITEM fuga hoge)',
      '(ITEM2 nogami(ABBR))',
      '(ABBR)'
    ])
  })
})
