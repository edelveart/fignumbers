import { ERROR_MESSAGE } from "./errorMessages.js";

export class Validator {
  static validateStep(step: bigint | undefined) {
    if (step !== undefined) {
      if (typeof step !== "bigint") {
        throw new Error(ERROR_MESSAGE.stepErrorMessage);
      }
      if (step <= 0n) {
        throw new Error(ERROR_MESSAGE.stepErrorMessage);
      }
    }
  }

  static validateStart(start: bigint | undefined) {
    if (start !== undefined) {
      if (typeof start !== "bigint") {
        throw new Error(ERROR_MESSAGE.stepErrorMessage);
      }
    }
  }

  static validateMFacets(m: bigint | undefined) {
    if (m !== undefined) {
      if (typeof m !== "bigint") {
        throw new Error(ERROR_MESSAGE.mFacetsErrorMessage);
      }
      if (m <= 2n) {
        throw new Error(ERROR_MESSAGE.stepErrorMessage);
      }
    }
  }
}
