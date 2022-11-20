import { parseNestedBrackets } from "../parse_nested_brackets";

describe("parseNestedBrackets", () => {
  it("should be defined", () => {
    expect(parseNestedBrackets).toBeDefined();
  });
  it("should return an array", () => {
    expect(Array.isArray(parseNestedBrackets("<test>"))).toBeTruthy();
  });
  it("should return an array of strings", () => {
    expect(typeof parseNestedBrackets("<test>")[0]).toBe("string");
  });
  it("should return an array of the tags", () => {
    expect(parseNestedBrackets("<MAIN hoge><MAIN2 fuga>")).toEqual([
      "<MAIN hoge>",
      "<MAIN2 fuga>",
    ]);
  });
  it("should return an array of the tags (recursive)", () => {
    expect(
      parseNestedBrackets(
        `THIS IS SAMPLE TEXT(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))`,
        { openBrackets: "(", closingBrackets: ")" }
      )
    ).toEqual([
      "(MAIN hoge 0.1 fuga(ITEM fuga hoge)hoge(ITEM2 nogami(ABBR)))",
      "(ITEM fuga hoge)",
      "(ITEM2 nogami(ABBR))",
      "(ABBR)",
    ]);
  });
});
