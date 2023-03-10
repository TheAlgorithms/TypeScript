import { HashTable } from "../hash_map";

describe("Hash Table", () => {
    let hashTable: HashTable<string, number>;
    beforeEach(() => {
        hashTable = new HashTable();
    });

    it("should set a value", () => {
        hashTable.set("a", 1);

        expect(hashTable.values()).toEqual([1]);
    });

    it("should override a value", () => {
        hashTable.set("a", 1);
        hashTable.set("a", 2);

        expect(hashTable.values()).toEqual([2]);
    });

    it("should get a value", () => {
        hashTable.set("a", 1);

        expect(hashTable.get("a")).toBe(1);
    });

    it("should get null if key does not exist", () => {
        expect(hashTable.get("a")).toBeNull();
    });

    it("should delete a value", () => {
        hashTable.set("a", 1);
        hashTable.delete("a");

        expect(hashTable.get("a")).toBeNull();
    });

    it("should do nothing on delete if key does not exist", () => {
        hashTable.delete("a");

        expect(hashTable.get("a")).toBeNull();
    });

    it("should return true if key exists", () => {
        hashTable.set("a", 1);

        expect(hashTable.has("a")).toBe(true);
    });

    it("should return false if key does not exist", () => {
        expect(hashTable.has("a")).toBe(false);
    });

    it("should clear the hash table", () => {
        hashTable.set("a", 1);
        hashTable.set("b", 2);
        hashTable.set("c", 3);
        hashTable.clear();

        expect(hashTable.getSize()).toBe(0);
    });

    it("should return all keys", () => {
        hashTable.set("a", 1);
        hashTable.set("b", 2);
        hashTable.set("c", 3);

        expect(hashTable.keys()).toEqual(["a", "b", "c"]);
    });

    it("should return all values", () => {
        hashTable.set("a", 1);
        hashTable.set("b", 2);
        hashTable.set("c", 3);

        expect(hashTable.values()).toEqual([1, 2, 3]);
    });

    it("should return all key-value pairs", () => {
        hashTable.set("a", 1);
        hashTable.set("b", 2);
        hashTable.set("c", 3);

        expect(hashTable.entries()).toEqual([
            { key: "a", value: 1 },
            { key: "b", value: 2 },
            { key: "c", value: 3 },
        ]);
    });
});
