import { CONFIG_CONSTANTS } from "../../core/types/configConstants.js";
import { Validator } from "../../core/validators/Validator.js";
import { SPACE_MAP_STRATEGY, type SpaceConfigMap } from "../mapped-types/SpaceMappedTypes.js";

export class SpaceFigNumbers<KMapStrategy extends keyof SpaceConfigMap> {
  private strategy: KMapStrategy;

  constructor(strategy: KMapStrategy) {
    this.strategy = strategy;
  }

  generate(config: SpaceConfigMap[KMapStrategy]): Generator<bigint> {
    if (CONFIG_CONSTANTS.step in config) {
      Validator.validateStep(config.step);
    }
    if (CONFIG_CONSTANTS.start in config) {
      Validator.validateStart(config.start);
    }
    if (CONFIG_CONSTANTS.m in config) {
      Validator.validateMFacets(config.m);
    }

    return SPACE_MAP_STRATEGY[this.strategy].generate(config);
  }
}
