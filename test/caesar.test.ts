import { describe, it, expect } from "vitest";
import { encode, decode, rot13 } from "../src";

const decoded = "Caesar cipher lib test!";
const encoded = "Fdhvdu flskhu ole whvw!";
const rot13ed = "Pnrfne pvcure yvo grfg!";

describe("caesar", () => {
  it("should encoding", () => {
    expect(encode(decoded, 3)).toBe(encoded);
  });

  it("should decoding", () => {
    expect(decode(encoded, 3)).toBe(decoded);
  });

  it("should rot13", () => {
    expect(rot13(decoded)).toBe("Pnrfne pvcure yvo grfg!");
  });
});
