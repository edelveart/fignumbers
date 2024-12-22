import { it, describe } from "vitest";
import { SpaceFigNumbers } from "../../../src/index";
import { compareExpectToEqual } from "../../utils/helperGeneratorContext";

describe("Space Figurate Numbers Generation", () => {
  it("should return the sequence of pyramidal numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("pyramidal", { step: 1n, m: 18n }),
      [
        1, 19, 70, 170, 335, 581, 924, 1380, 1965, 2695, 3586, 4654, 5915, 7385, 9080, 11016, 13209,
        15675, 18430, 21490, 24871, 28589, 32660, 37100, 41925, 47151, 52794, 58870, 65395, 72385,
        79856, 87824, 96305, 105315, 114870, 124986, 135679, 146965, 158860, 171380, 184541, 198359,
        212850, 228030, 243915, 260521, 277864, 295960, 314825, 334475, 354926, 376194, 398295,
        421245, 445060, 469756, 495349, 521855, 549290, 577670,
      ],
    );
  });

  it("should return the sequence of centered polygonal pyramidal numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredMgonalPyramidal", { m: 11n }),
      [
        1, 13, 47, 114, 225, 391, 623, 932, 1329, 1825, 2431, 3158, 4017, 5019, 6175, 7496, 8993,
        10677, 12559, 14650, 16961, 19503, 22287, 25324, 28625, 32201, 36063, 40222, 44689, 49475,
        54591, 60048, 65857, 72029, 78575, 85506, 92833, 100567, 108719, 117300, 126321, 135793,
        145727, 156134, 167025, 178411, 190303, 202712, 215649, 229125, 243151, 257738, 272897,
        288639, 304975, 321916, 339473, 357657, 376479, 395950,
      ],
    );
  });

  it("should return the sequence of centered polygonal pyramid numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredMgonalPyramid", { m: 9n }),
      [1, 11, 45, 119, 249, 451, 741, 1135, 1649, 2299],
    );
  });

  it("should return the sequence of cubic  numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("cubic", {}),
      [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
    );
  });

  it("should return the sequence of tetrahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("tetrahedral", {}),
      [1, 4, 10, 20, 35, 56, 84, 120, 165, 220],
    );
  });

  it("should return the sequence of octahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("octahedral", {}),
      [1, 6, 19, 44, 85, 146, 231, 344, 489, 670],
    );
  });

  it("should return the sequence of centered dodecahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("dodecahedral", {}),
      [
        1, 20, 84, 220, 455, 816, 1330, 2024, 2925, 4060, 5456, 7140, 9139, 11480, 14190, 17296,
        20825, 24804, 29260, 34220, 39711, 45760, 52394, 59640, 67525, 76076, 85320, 95284, 105995,
        117480, 129766, 142880, 156849, 171700, 187460, 204156, 221815, 240464, 260130, 280840,
        302621, 325500, 349504, 374660, 400995, 428536, 457310, 487344, 518665, 551300, 585276,
        620620, 657359, 695520, 735130, 776216, 818805, 862924, 908600, 955860, 1004731, 1055240,
        1107414, 1161280, 1216865, 1274196, 1333300, 1394204, 1456935, 1521520, 1587986, 1656360,
        1726669, 1798940, 1873200,
      ],
    );
  });

  it("should return the sequence of icosahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("icosahedral", {}),
      [1, 12, 48, 124, 255, 456, 742, 1128, 1629, 2260],
    );
  });

  it("should return the sequence of truncated tetrahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("truncatedTetrahedral", {}),
      [1, 16, 68, 180, 375, 676, 1106, 1688, 2445, 3400],
    );
  });

  it("should return the sequence of truncated cubic numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("truncatedCubic", {}),
      [
        1, 56, 311, 920, 2037, 3816, 6411, 9976, 14665, 20632, 28031, 37016, 47741, 60360, 75027,
        91896, 111121, 132856, 157255, 184472, 214661, 247976, 284571, 324600, 368217, 415576,
        466831, 522136, 581645, 645512, 713891, 786936, 864801, 947640, 1035607, 1128856, 1227541,
        1331816, 1441835, 1557752, 1679721, 1807896, 1942431, 2083480, 2231197, 2385736, 2547251,
        2715896, 2891825, 3075192, 3266151, 3464856, 3671461, 3886120, 4108987, 4340216, 4579961,
        4828376, 5085615, 5351832,
      ],
    );
  });

  it("should return the sequence of truncated octahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("truncatedOctahedral", {}),
      [1, 38, 201, 586, 1289, 2406, 4033, 6266, 9201, 12934],
    );
  });

  it("should return the sequence of stella octangula numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("stellaOctangula", {}),
      [1, 14, 51, 124, 245, 426, 679, 1016, 1449, 1990],
    );
  });

  it("should return the sequence of polygonal prism numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("mgonalPrism", { m: 14n }),
      [
        1, 30, 129, 340, 705, 1266, 2065, 3144, 4545, 6310, 8481, 11100, 14209, 17850, 22065, 26896,
        32385, 38574, 45505, 53220,
      ],
    );
  });

  it("should return the sequence of rhombic dodecahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("rhombicDodecahedral", {}),
      [
        1, 15, 65, 175, 369, 671, 1105, 1695, 2465, 3439, 4641, 6095, 7825, 9855, 12209, 14911,
        17985, 21455, 25345, 29679, 34481, 39775, 45585, 51935, 58849, 66351, 74465, 83215, 92625,
        102719, 113521, 125055, 137345, 150415, 164289, 178991, 194545, 210975, 228305, 246559,
        265761, 285935, 307105, 329295, 352529,
      ],
    );
  });

  it("should return the sequence of Haűy rhombic dodecahedral numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("hauyRhombicDodecahedral", {}),
      [1, 33, 185, 553, 1233, 2321, 3913, 6105, 8993, 12673],
    );
  });

  it("should return the sequence of centered cube numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredCube", {}),
      [1, 9, 35, 91, 189, 341, 559, 855, 1241, 1729],
    );
  });

  it("should return the sequence of tetrahedron cube numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredTetrahedron", {}),
      [1, 5, 15, 35, 69, 121, 195, 295, 425, 589],
    );
  });

  it("should return the sequence of centered octahedron  numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredOctahedron", {}),
      [
        1, 7, 25, 63, 129, 231, 377, 575, 833, 1159, 1561, 2047, 2625, 3303, 4089, 4991, 6017, 7175,
        8473, 9919,
      ],
    );
  });

  it("should return the sequence of centered icosahedron  numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredIcosahedron", {}),
      [1, 13, 55, 147, 309, 561, 923, 1415, 2057, 2869],
    );
  });

  it("should return the sequence of centered dodecahedron  numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredDodecahedron", {}),
      [1, 21, 95, 259, 549, 1001, 1651, 2535, 3689, 5149],
    );
  });

  it("should return the sequence of centered truncated tetrahedron numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredTruncatedTetrahedron", {}),
      [
        1, 17, 75, 203, 429, 781, 1287, 1975, 2873, 4009, 5411, 7107, 9125, 11493, 14239, 17391,
        20977, 25025, 29563, 34619,
      ],
    );
  });

  it("should return the sequence of centered truncated cube numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredTruncatedCube", {}),
      [
        1, 49, 235, 651, 1389, 2541, 4199, 6455, 9401, 13129, 17731, 23299, 29925, 37701, 46719,
        57071, 68849, 82145, 97051, 113659,
      ],
    );
  });

  it("should return the sequence of centered truncated octahedron numbers", () => {
    compareExpectToEqual(
      SpaceFigNumbers.generate("centeredTruncatedOctahedron", {}),
      [
        1, 33, 155, 427, 909, 1661, 2743, 4215, 6137, 8569, 11571, 15203, 19525, 24597, 30479,
        37231, 44913, 53585, 63307, 74139,
      ],
    );
  });
});
