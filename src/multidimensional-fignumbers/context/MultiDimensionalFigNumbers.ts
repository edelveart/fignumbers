import { CONFIG_CONSTANTS } from "../../core/types/configConstants.js";
import { Validator } from "../../core/validators/Validator.js";
import {
  multiDimensionalMapStrategy,
  type MultiDimensionalConfigMap,
} from "../mapped-types/MultiDimensionalMappedTypes.js";

export class MultiDimensionalFigNumbers {
  static generate<KMap extends keyof MultiDimensionalConfigMap>(
    strategyName: KMap,
    config: MultiDimensionalConfigMap[KMap],
  ): Generator<bigint> {
    if (CONFIG_CONSTANTS.step in config) {
      Validator.validateStep(config.step);
    }
    if (CONFIG_CONSTANTS.start in config) {
      Validator.validateStart(config.start);
    }
    if (CONFIG_CONSTANTS.m in config) {
      Validator.validateMFacets(config.m);
    }

    return multiDimensionalMapStrategy[strategyName].generate(config);
  }
}
