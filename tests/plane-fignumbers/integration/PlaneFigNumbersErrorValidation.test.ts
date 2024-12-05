import { expect, it, describe } from "vitest";
import { PlaneFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("Plane Figurate Numbers Error Validation", () => {
  it("should throw an error if 'step' parameter is not a biginteger or is less than 1n", () => {
    const invalidSteps = [-4n, -3n, 0.5];
    invalidSteps.forEach((step: unknown | any) => {
      expect(() => PlaneFigNumbers.generate("polygonal", { step })).toThrowError(
        ERROR_MESSAGE.stepErrorMessage,
      );
    });
  });

  it("should throw an error if 'start' parameter is not biginteger", () => {
    const invalidStart = [0.3, 0.12, 6.85, 0.5];
    invalidStart.forEach((start: unknown | any) => {
      expect(() => PlaneFigNumbers.generate("polygonal", { start })).toThrowError(
        ERROR_MESSAGE.startErrorMessage,
      );
    });
  });

  it("should throw an error if 'm' parameter is not an biginteger or is less than 3n", () => {
    const invalidMFacets = [-5n, -48n, -0n, 4.35];
    invalidMFacets.forEach((m: unknown | any) => {
      expect(() => PlaneFigNumbers.generate("polygonal", { m })).toThrowError(
        ERROR_MESSAGE.mFacetsErrorMessage,
      );
    });
  });
});
