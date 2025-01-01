import { CONFIG_CONSTANTS } from "../../core/types/configConstants.js";
import { Validator } from "../../core/validators/Validator.js";
import {
  MULTIDIMENSIONAL_MAP_STRATEGY,
  type MultiDimensionalConfigMap,
} from "../mapped-types/MultiDimensionalMappedTypes.js";

export class MultiDimensionalFigNumbers<KMapStrategy extends keyof MultiDimensionalConfigMap> {
  private strategy: KMapStrategy;

  constructor(strategy: KMapStrategy) {
    this.strategy = strategy;
  }

  generate(config: MultiDimensionalConfigMap[KMapStrategy]): Generator<bigint> {
    if (CONFIG_CONSTANTS.step in config) {
      Validator.validateStep(config.step);
    }
    if (CONFIG_CONSTANTS.start in config) {
      Validator.validateStart(config.start);
    }
    if (CONFIG_CONSTANTS.m in config) {
      Validator.validateMFacets(config.m);
    }
    if (CONFIG_CONSTANTS.k in config) {
      Validator.validateKDimension(config.k);
    }
    return MULTIDIMENSIONAL_MAP_STRATEGY[this.strategy].generate(config);
  }
}
