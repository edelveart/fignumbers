import { expect, it, describe } from "vitest";
import { MultiDimensionalFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("MultiDimensional Figurate Numbers Error Validation", () => {
  it("should throw an error if the 'm' parameter is not a BigInt or is less than 1n", () => {
    const invalidSteps = [0.5, -3, 7.43, -0n, -32n];
    invalidSteps.forEach((step: unknown | any) => {
      expect(() => MultiDimensionalFigNumbers.generate("biquadratic", { step })).toThrowError(
        ERROR_MESSAGE.stepErrorMessage,
      );
    });
  });

  it("should throw an error if the 'start' parameter is not a BigInt", () => {
    const invalidStart = [0.3, -3.4, 6.81, 39.4, -129, 2];
    invalidStart.forEach((start: unknown | any) => {
      expect(() =>
        MultiDimensionalFigNumbers.generate("kDimensionalHyperCube", { start }),
      ).toThrowError(ERROR_MESSAGE.startErrorMessage);
    });
  });

  it("should throw an error if the 'm' parameter is not a BigInt or is less than 3n", () => {
    const invalidMFacets = [-9n, -129n, -0n, 6.75];
    invalidMFacets.forEach((m: unknown | any) => {
      expect(() =>
        MultiDimensionalFigNumbers.generate("fourDimensionalMgonalPyramidal", { m }),
      ).toThrowError(ERROR_MESSAGE.mFacetsErrorMessage);
    });
  });
});
