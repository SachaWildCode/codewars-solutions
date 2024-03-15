/*
Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.
*/

import { foldTo } from "../solutions/7kyu_folding_your_way_to_the_moon.ts";

describe("Fold Paper Unit Tests", () => {
  it("should return null when distance is negative", () => {
    const result = foldTo(-1);
    expect(result).toBeNull();
  });

  it("should return 0 when distance is less than paper thickness", () => {
    const result = foldTo(0.00005);
    expect(result).toBe(0);
  });

  it("should return 0 when distance is equal to paper thickness", () => {
    const result = foldTo(0.0001);
    expect(result).toBe(0);
  });

  it("should return the correct number of folds for larger distances", () => {
    const result1 = foldTo(100);
    const result2 = foldTo(10000);
    expect(result1).toBe(20);
    expect(result2).toBe(27);
  });
  it("should handle extremely large distances", () => {
    const result = foldTo(384000000);
    expect(result).toBe(42);
  });
});
