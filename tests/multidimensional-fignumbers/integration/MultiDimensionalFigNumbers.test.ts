import { expect, it, describe } from "vitest";
import { MultiDimensionalFigNumbers } from "../../../src/index";
import { createArrOfFigNumbers } from "../../utils/helperGeneratorContext";

describe("MultiDimensional Figurate Numbers Generation", () => {
  it("should return the sequence of pentatope numbers", () => {
    const generator = MultiDimensionalFigNumbers.generate("pentatope", { step: 1 });
    const arrOfFigNumbers = createArrOfFigNumbers(25, generator);
    expect(arrOfFigNumbers).toEqual([
      1, 5, 15, 35, 70, 126, 210, 330, 495, 715, 1001, 1365, 1820, 2380, 3060, 3876, 4845, 5985,
      7315, 8855, 10626, 12650, 14950, 17550, 20475,
    ]);
  });
});
