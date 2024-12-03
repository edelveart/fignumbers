export class Validator {
  static validateStep(step: number | undefined) {
    if (step !== undefined) {
      if (!Number.isInteger(step) || step <= 0) {
        throw new Error("Parameter 'step' must be an integer greater than or equal to 1");
      }
    }
  }

  static validateStart(start: number | undefined) {
    if (start !== undefined) {
      if (!Number.isInteger(start)) {
        throw new Error("Parameter 'start' must be an integer");
      }
    }
  }

  static validateMFacets(m: number | undefined) {
    if (m !== undefined) {
      if (!Number.isInteger(m) || m < 3) {
        throw new Error("Parameter 'm' must be an integer greater than or equal to 3");
      }
    }
  }
}
