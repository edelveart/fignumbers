import { expect, it, describe } from "vitest";
import { PlaneFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("Plane Figurate Numbers Error Validation", () => {
  it("should throw an error if the 'm' parameter is not a BigInt or is less than 1n", () => {
    const seq = new PlaneFigNumbers("polygonal");
    const invalidSteps = [-4n, -3n, 0.5];
    invalidSteps.forEach((step: unknown | any) => {
      expect(() => seq.generate({ step })).toThrowError(ERROR_MESSAGE.stepErrorMessage);
    });
  });

  it("should throw an error if the 'start' parameter is not a BigInt", () => {
    const invalidStart = [0.3, 0.12, 6.85, 0.5];
    const seq = new PlaneFigNumbers("polygonal");
    invalidStart.forEach((start: unknown | any) => {
      expect(() => seq.generate({ start })).toThrowError(ERROR_MESSAGE.startErrorMessage);
    });
  });

  it("should throw an error if the 'm' parameter is not a BigInt or is less than 3n", () => {
    const seq = new PlaneFigNumbers("polygonal");
    const invalidMFacets = [-5n, -48n, -0n, 4.35];
    invalidMFacets.forEach((m: unknown | any) => {
      expect(() => seq.generate({ m })).toThrowError(ERROR_MESSAGE.mFacetsErrorMessage);
    });
  });
});
