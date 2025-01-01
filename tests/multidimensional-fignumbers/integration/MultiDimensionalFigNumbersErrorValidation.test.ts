import { expect, it, describe } from "vitest";
import { MultiDimensionalFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("MultiDimensional Figurate Numbers Error Validation", () => {
  it("should throw an error if the 'm' parameter is not a BigInt or is less than 1n", () => {
    const seq = new MultiDimensionalFigNumbers("biquadratic");
    const invalidSteps = [0.5, -3, 7.43, -0n, -32n];
    invalidSteps.forEach((step: unknown | any) => {
      expect(() => seq.generate({ step })).toThrowError(ERROR_MESSAGE.stepErrorMessage);
    });
  });

  it("should throw an error if the 'start' parameter is not a BigInt", () => {
    const seq = new MultiDimensionalFigNumbers("kDimensionalHyperCube");
    const invalidStart = [0.3, -3.4, 6.81, 39.4, -129, 2];
    invalidStart.forEach((start: unknown | any) => {
      expect(() => seq.generate({ start })).toThrowError(ERROR_MESSAGE.startErrorMessage);
    });
  });

  it("should throw an error if the 'm' parameter is not a BigInt or is less than 3n", () => {
    const seq = new MultiDimensionalFigNumbers("fourDimensionalMgonalPyramidal");
    const invalidMFacets = [-9n, -129n, -0n, 6.75];
    invalidMFacets.forEach((m: unknown | any) => {
      expect(() => seq.generate({ m })).toThrowError(ERROR_MESSAGE.mFacetsErrorMessage);
    });
  });

  it("should throw an error if the 'k' parameter is not a BigInt or is less than 4n", () => {
    const seq = new MultiDimensionalFigNumbers("kDimensionalCenteredHyperCube");
    const invalidKDimension = [-45n, 3n, -10n, 23.75];
    invalidKDimension.forEach((k: unknown | any) => {
      expect(() => seq.generate({ k })).toThrowError(ERROR_MESSAGE.kDimensionErrorMessage);
    });
  });
});
