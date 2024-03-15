/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

import { breakCamel } from "../solutions/6kyu_breaking_camelcase.ts";

describe("breakCamel", () => {
  it("should break up camel casing with a space between words", () => {
    expect(breakCamel("camelCasing")).toBe("camel Casing");
    expect(breakCamel("helloWorld")).toBe("hello World");
    expect(breakCamel("largeWordInCamelCase")).toBe("large Word In Camel Case");
    expect(breakCamel("anotherLargeWordInCamelCase")).toBe(
      "another Large Word In Camel Case"
    );
  });

  it("should handle empty strings", () => {
    expect(breakCamel("")).toBe("");
  });

  it("should handle strings without camel case", () => {
    expect(breakCamel("nocamelcase")).toBe("nocamelcase");
  });

  it("should handle single-word camel case", () => {
    expect(breakCamel("OneWord")).toBe("One Word");
  });

  it("should handle strings with leading uppercase letter", () => {
    expect(breakCamel("UpperCaseLetter")).toBe("Upper Case Letter");
  });

  it("should handle strings with only uppercase letters", () => {
    expect(breakCamel("ALLUPPERCASE")).toBe("ALLUPPERCASE");
  });

  it("should handle strings with numbers and camel case", () => {
    expect(breakCamel("stringWithNumbers123AndCamelCase")).toBe(
      "string With Numbers123 And Camel Case"
    );
  });

  it("should handle strings with alternating uppercase and lowercase letters", () => {
    expect(breakCamel("AlTeRnAtInGcAsE")).toBe("Al Te Rn At In Gc As E");
  });

  it("should handle strings with leading and trailing whitespace", () => {
    expect(breakCamel("  leadingAndTrailingWhitespace  ")).toBe(
      "leading And Trailing Whitespace"
    );
  });

  it("should handle strings with multiple consecutive lowercase letters", () => {
    expect(breakCamel("consecutiveLowercaseLetters")).toBe(
      "consecutive Lowercase Letters"
    );
  });
});
