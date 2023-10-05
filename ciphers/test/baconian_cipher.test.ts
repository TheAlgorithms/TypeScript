import { BaconianCipher } from "../baconian_cipher";

describe("BaconianCipher", () => {
  let baconianCipher: BaconianCipher = new BaconianCipher();

  it("'HELLO WORLD' === baconianDecode(baconianEncode('Hello world'))", () => {
    const word: string = "Hello world";
    const expectedResult: string = "HELLO WORLD";
    const result: string = baconianCipher.baconianDecode(
      baconianCipher.baconianEncode(word)
    );
    expect(result).toMatch(expectedResult);
  });

  it("'AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB' === baconianEncode(baconianDecode('AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB'))", () => {
    const word: string = "AABBBAABAAABABBABABBABBBA BABBAABBBABAAABABABBAAABB";
    const result: string = baconianCipher.baconianEncode(
      baconianCipher.baconianDecode(word)
    );
    expect(result).toMatch(word);
  });
});
