/** Find the interpolation amount represented by a value between two endpoints. */
export function inverseLerp(start: number, end: number, value: number): number {
  if (start === end) {
    throw new RangeError("start and end must be different");
  }

  return (value - start) / (end - start);
}
