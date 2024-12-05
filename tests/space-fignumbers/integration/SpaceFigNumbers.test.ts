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
});
