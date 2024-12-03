import { ERROR_MESSAGE } from "./errorMessages.js";

export class Validator {
  static validateStep(step: number | undefined) {
    if (step !== undefined) {
      if (!Number.isInteger(step) || step <= 0) {
        throw new Error(ERROR_MESSAGE.stepErrorMessage);
      }
    }
  }

  static validateStart(start: number | undefined) {
    if (start !== undefined) {
      if (!Number.isInteger(start)) {
        throw new Error(ERROR_MESSAGE.startErrorMessage);
      }
    }
  }

  static validateMFacets(m: number | undefined) {
    if (m !== undefined) {
      if (!Number.isInteger(m) || m < 3) {
        throw new Error(ERROR_MESSAGE.mFacetsErrorMessage);
      }
    }
  }
}
