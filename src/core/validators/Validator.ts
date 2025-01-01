import type { MultiDimensionalConfigMap } from "../../multidimensional-fignumbers/mapped-types/MultiDimensionalMappedTypes.js";
import { CONFIG_CONSTANTS } from "../types/configConstants.js";
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
        throw new Error(ERROR_MESSAGE.startErrorMessage);
      }
    }
  }

  static validateMFacets(m: bigint | undefined) {
    if (m !== undefined) {
      if (typeof m !== "bigint") {
        throw new Error(ERROR_MESSAGE.mFacetsErrorMessage);
      }
      if (m <= 2n) {
        throw new Error(ERROR_MESSAGE.mFacetsErrorMessage);
      }
    }
  }

  static validateKDimension(k: bigint | undefined) {
    if (k !== undefined) {
      if (typeof k !== "bigint") {
        throw new Error(ERROR_MESSAGE.kDimensionErrorMessage);
      }
      if (k < 4n) {
        throw new Error(ERROR_MESSAGE.kDimensionErrorMessage);
      }
    }
  }

  static validateConfig<Key extends keyof MultiDimensionalConfigMap>(
    config: MultiDimensionalConfigMap[Key],
  ): void {
    if (CONFIG_CONSTANTS.step in config) {
      this.validateStep(config.step);
    }
    if (CONFIG_CONSTANTS.start in config) {
      this.validateStart(config.start);
    }
    if (CONFIG_CONSTANTS.m in config) {
      this.validateMFacets(config.m);
    }
    if (CONFIG_CONSTANTS.k in config) {
      this.validateKDimension(config.k);
    }
  }
}
