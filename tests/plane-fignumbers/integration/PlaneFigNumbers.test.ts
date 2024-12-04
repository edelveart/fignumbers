import { expect, it, describe } from "vitest";
import { PlaneFigNumbers } from "../../../src/index";
import { createArrOfFigNumbers } from "../../utils/helperGeneratorContext";

describe("Plane Figurate Numbers Generation", () => {
  it("should return the sequence of triangular numbers", () => {
    const generator = PlaneFigNumbers.generate("polygonal", { step: 1 });
    const arrOfFigNumbers = createArrOfFigNumbers(20, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120, 136, 153, 171, 190, 210,
    ]);
  });

  it("should return the sequence of square numbers", () => {
    const generator = PlaneFigNumbers.generate("polygonal", { m: 4 });
    const arrOfFigNumbers = createArrOfFigNumbers(6, generator);
    expect(arrOfFigNumbers).toEqual([1, 4, 9, 16, 25, 36]);
  });

  it("should return the sequence of pentagonal numbers", () => {
    const generator = PlaneFigNumbers.generate("polygonal", { m: 5 });
    const arrOfFigNumbers = createArrOfFigNumbers(20, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 5, 12, 22, 35, 51, 70, 92, 117, 145, 176, 210, 247, 287, 330, 376, 425, 477, 532, 590,
    ]);
  });

  it("should return the sequence of octagonal numbers", () => {
    const generator = PlaneFigNumbers.generate("polygonal", { m: 8 });
    const arrOfFigNumbers = createArrOfFigNumbers(20, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 8, 21, 40, 65, 96, 133, 176, 225, 280, 341, 408, 481, 560, 645, 736, 833, 936, 1045, 1160,
    ]);
  });

  it("should return the sequence of centered polygonal numbers", () => {
    const generator = PlaneFigNumbers.generate("centeredPolygonal", { m: 3, start: 1 });
    const arrOfFigNumbers = createArrOfFigNumbers(60, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 4, 10, 19, 31, 46, 64, 85, 109, 136, 166, 199, 235, 274, 316, 361, 409, 460, 514, 571, 631,
      694, 760, 829, 901, 976, 1054, 1135, 1219, 1306, 1396, 1489, 1585, 1684, 1786, 1891, 1999,
      2110, 2224, 2341, 2461, 2584, 2710, 2839, 2971, 3106, 3244, 3385, 3529, 3676, 3826, 3979,
      4135, 4294, 4456, 4621, 4789, 4960, 5134, 5311,
    ]);
  });

  it("should return the sequence of cross numbers", () => {
    const generator = PlaneFigNumbers.generate("cross", {});
    const arrOfFigNumbers = createArrOfFigNumbers(60, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93,
      97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169,
      173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 233, 237,
    ]);
  });
});
