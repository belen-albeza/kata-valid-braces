import { describe, it, expect } from "vitest";

import { add } from "./index";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("should work with zero", () => {
    expect(add(0, 2)).toBe(2);
  });
});
