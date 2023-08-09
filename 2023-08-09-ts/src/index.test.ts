import { describe, it, expect } from "vitest";

import { isValidExpression } from "./index";

describe("isValidExpression", () => {
  it("returns true on empty string", () => {
    expect(isValidExpression("")).toBe(true);
  });

  describe("simple expressions", () => {
    it("returns true for closed parens", () => {
      expect(isValidExpression("()")).toBe(true);
    });
    it("returns true for other variants of closed parens", () => {
      expect(isValidExpression("[]")).toBe(true);
      expect(isValidExpression("{}")).toBe(true);
    });
    it("returns false for unclosed parens", () => {
      expect(isValidExpression("(")).toBe(false);
    });
    it("returns false for mismatched closed paren/brace/bracked", () => {
      expect(isValidExpression("(]")).toBe(false);
    });
  });

  describe("complex expressions", () => {
    it("validates unnested expressions", () => {
      expect(isValidExpression("()[]{}")).toBe(true);
      expect(isValidExpression("()[]{}(]")).toBe(false);
    });
    it("validates nested expressions", () => {
      expect(isValidExpression("({[]})")).toBe(true);
    });
    it("validates nested expressions with repeated characters", () => {
      expect(isValidExpression("({{[]}})")).toBe(true);
    });
    it("returns false for invalid unnesting", () => {
      expect(isValidExpression("({)}")).toBe(false);
      expect(isValidExpression("[(])")).toBe(false);
    });
  });
});
