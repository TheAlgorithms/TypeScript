import { DisjointSet } from "../disjoint_set"

describe("DisjointSet", () => {
  let ds: DisjointSet;

  beforeEach(() => {
    // Ensure create a new DisjoinSet instance on every test
    ds = new DisjointSet(10);
  });

  it("should show proper head element after join", () => {
    expect(ds.find(0)).toEqual(0);

    ds.join(1, 4);
    ds.join(2, 3);
    expect(ds.isSame(1, 4)).toEqual(true);
    expect(ds.isSame(2, 3)).toEqual(true);
    expect(ds.isSame(1, 3)).toEqual(false);

    ds.join(4, 3);
    expect(ds.isSame(1, 3)).toEqual(true);
    expect(ds.isSame(2, 9)).toEqual(false);
  });

  it("should join the smaller set to the bigger one", () => {
    ds.join(0, 1);
    ds.join(1, 2);
    ds.join(2, 3);

    ds.join(4, 5);
    ds.join(5, 6);
    ds.join(6, 7);
    ds.join(7, 8);
    ds.join(8, 9);

    const firstHead = ds.find(0);
    const secondHead = ds.find(9);

    ds.join(firstHead, secondHead);

    expect(ds.find(secondHead)).toEqual(secondHead);
    expect(ds.find(firstHead)).toEqual(secondHead);
  });
})
