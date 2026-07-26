import { describe, expect, it } from "vitest";

import { inverseLerp } from "../src/index.js";

describe("inverseLerp", () => {
  it.each([
    [0, 10, 5, 0.5],
    [10, 20, 25, 1.5],
    [10, 0, 5, 0.5],
  ])("finds the interpolation amount", (start, end, value, expected) => {
    expect(inverseLerp(start, end, value)).toBe(expected);
  });

  it("rejects a zero-sized input range", () => {
    expect(() => inverseLerp(1, 1, 1)).toThrow(
      new RangeError("start and end must be different"),
    );
  });
});
