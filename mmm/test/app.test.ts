import { describe, expect, it } from "vitest";

describe("App", () => {
  const x = 2;
  const y = 2;
  it("can plus", () => {
    expect(x + y).toBe(4);
  });
  it("can multiply", () => {
    expect(x * y).toBe(4);
  });
});
