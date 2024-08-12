// Your tests here
// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });


  it("handles values that aren't strings", () => {
    const word = 1234;
    const points = pointsForWord(word);
    expect(points).toBe(0); // Non-string values should return 0 points
  });
});
