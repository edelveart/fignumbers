import { expect, it, describe } from "vitest";
import { MultiDimensionalFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("MultiDimensional Figurate Numbers Error Validation", () => {
  it("should throw an error if 'step' parameter is not an integer or is less than 1", () => {
    const invalidSteps = [0.5, -3, 7.43];
    invalidSteps.forEach((step) => {
      expect(() => MultiDimensionalFigNumbers.generate("biquadratic", { step })).toThrowError(
        ERROR_MESSAGE.stepErrorMessage,
      );
    });
  });

  it("should throw an error if 'start' parameter is not integer", () => {
    const invalidStart = [0.3, -3.4, 6.81];
    invalidStart.forEach((start) => {
      expect(() =>
        MultiDimensionalFigNumbers.generate("kDimensionalHyperCube", { start }),
      ).toThrowError(ERROR_MESSAGE.startErrorMessage);
    });
  });

  it("should throw an error if 'm' parameter is not an integer or is less than 3", () => {
    const invalidMFacets = [0.5, 2, -1, 9.3];
    invalidMFacets.forEach((m) => {
      expect(() =>
        MultiDimensionalFigNumbers.generate("fourDimensionalMgonalPyramidal", { m }),
      ).toThrowError(ERROR_MESSAGE.mFacetsErrorMessage);
    });
  });
});
