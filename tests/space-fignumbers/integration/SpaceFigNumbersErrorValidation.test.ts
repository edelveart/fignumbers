import { expect, it, describe } from "vitest";
import { SpaceFigNumbers } from "../../../src/index";
import { ERROR_MESSAGE } from "../../../src/core/validators/errorMessages";

describe("Space Figurate Numbers Error Validation", () => {
  it("should throw an error if the 'm' parameter is not a BigInt or is less than 1n", () => {
    const seq = new SpaceFigNumbers("pyramidal");
    const invalidSteps = [0.5, -3, 7.43, 0n];
    invalidSteps.forEach((step: unknown | any) => {
      expect(() => seq.generate({ step })).toThrowError(ERROR_MESSAGE.stepErrorMessage);
    });
  });

  it("should throw an error if the 'start' parameter is not a BigInt", () => {
    const seq = new SpaceFigNumbers("pyramidal");
    const invalidStart = [0.3, -3.4, 6.81, -13];
    invalidStart.forEach((start: unknown | any) => {
      expect(() => seq.generate({ start })).toThrowError(ERROR_MESSAGE.startErrorMessage);
    });
  });

  it("should throw an error if the 'm' parameter is not a BigInt or is less than 3n", () => {
    const seq = new SpaceFigNumbers("pyramidal");
    const invalidMFacets = [0.5, 2, -1, 9.3, 2n];
    invalidMFacets.forEach((m: unknown | any) => {
      expect(() => seq.generate({ m })).toThrowError(ERROR_MESSAGE.mFacetsErrorMessage);
    });
  });
});
