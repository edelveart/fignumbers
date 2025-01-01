import { it, describe } from "vitest";
import { PlaneFigNumbers } from "../../../src/index";
import { compareExpectToEqual } from "../../utils/helperGeneratorContext";

describe("Plane Figurate Numbers Generation", () => {
  it("should return the sequence of octagonal numbers", () => {
    const sequence = new PlaneFigNumbers("polygonal");
    compareExpectToEqual(
      sequence.generate({ m: 8n }),
      [
        1, 8, 21, 40, 65, 96, 133, 176, 225, 280, 341, 408, 481, 560, 645, 736, 833, 936, 1045,
        1160,
      ],
    );
  });

  it("should return the sequence of centered polygonal numbers", () => {
    const sequence = new PlaneFigNumbers("centeredPolygonal");
    compareExpectToEqual(
      sequence.generate({ m: 3n, start: 1n }),
      [
        1, 4, 10, 19, 31, 46, 64, 85, 109, 136, 166, 199, 235, 274, 316, 361, 409, 460, 514, 571,
        631, 694, 760, 829, 901, 976, 1054, 1135, 1219, 1306, 1396, 1489, 1585, 1684, 1786, 1891,
        1999, 2110, 2224, 2341, 2461, 2584, 2710, 2839, 2971, 3106, 3244, 3385, 3529, 3676, 3826,
        3979, 4135, 4294, 4456, 4621, 4789, 4960, 5134, 5311,
      ],
    );
  });

  it("should return the sequence of truncated centered polygonal numbers", () => {
    const sequence = new PlaneFigNumbers("truncatedCenteredPolygonal");
    compareExpectToEqual(
      sequence.generate({ m: 7n }),
      [
        1, 36, 120, 253, 435, 666, 946, 1275, 1653, 2080, 2556, 3081, 3655, 4278, 4950, 5671, 6441,
        7260, 8128, 9045, 10011, 11026, 12090, 13203, 14365,
      ],
    );
  });

  it("should return the sequence of pronic numbers", () => {
    const sequence = new PlaneFigNumbers("pronic");
    compareExpectToEqual(
      sequence.generate({}),
      [
        2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420,
        462, 506, 552, 600, 650, 702, 756, 812, 870, 930, 992, 1056, 1122, 1190, 1260, 1332, 1406,
        1482, 1560, 1640, 1722, 1806, 1892, 1980, 2070, 2162, 2256, 2352, 2450, 2550, 2652, 2756,
        2862, 2970, 3080, 3192, 3306, 3422, 3540, 3660, 3782, 3906, 4032, 4160, 4290, 4422, 4556,
        4692, 4830, 4970, 5112, 5256, 5402, 5550, 5700, 5852, 6006, 6162, 6320, 6480,
      ],
    );
  });

  it("should return the sequence of truncated pronic numbers", () => {
    const sequence = new PlaneFigNumbers("truncatedPronic");
    compareExpectToEqual(sequence.generate({}), [2, 16, 44, 86, 142, 212, 296, 394, 506, 632]);
  });

  it("should return the sequence of polite numbers", () => {
    const sequence = new PlaneFigNumbers("polite");
    compareExpectToEqual(
      sequence.generate({}),
      [1, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19],
    );
  });

  it("should return the sequence of impolite numbers", () => {
    const sequence = new PlaneFigNumbers("impolite");
    compareExpectToEqual(
      sequence.generate({}),
      [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384],
    );
  });

  it("should return the sequence of aztec diamond numbers", () => {
    const sequence = new PlaneFigNumbers("aztecDiamond");
    compareExpectToEqual(sequence.generate({}), [4, 12, 24, 40, 60, 84, 112, 144, 180, 220]);
  });

  it("should return the sequence of gnomic numbers", () => {
    const sequence = new PlaneFigNumbers("gnomic");
    compareExpectToEqual(sequence.generate({}), [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  });

  it("should return the sequence of cross numbers", () => {
    const sequence = new PlaneFigNumbers("cross");
    compareExpectToEqual(
      sequence.generate({}),
      [
        1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93,
        97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165,
        169, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 233, 237,
      ],
    );
  });

  it("should return the sequence of polygram numbers", () => {
    const sequence = new PlaneFigNumbers("polygram");
    compareExpectToEqual(
      sequence.generate({ m: 3n }),
      [
        1, 7, 19, 37, 61, 91, 127, 169, 217, 271, 331, 397, 469, 547, 631, 721, 817, 919, 1027,
        1141, 1261, 1387, 1519, 1657, 1801, 1951, 2107, 2269, 2437, 2611, 2791, 2977, 3169, 3367,
        3571, 3781, 3997, 4219, 4447, 4681, 4921, 5167, 5419, 5677, 5941, 6211, 6487, 6769, 7057,
        7351,
      ],
    );
  });
});
