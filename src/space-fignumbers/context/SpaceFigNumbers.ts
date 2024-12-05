import { CONFIG_CONSTANTS } from "../../core/types/configConstants.js";
import { Validator } from "../../core/validators/Validator.js";
import { spaceMapStrategy, type SpaceConfigMap } from "../mapped-types/SpaceMappedTypes.js";

export class SpaceFigNumbers {
  static generate<KMap extends keyof SpaceConfigMap>(
    strategyName: KMap,
    config: SpaceConfigMap[KMap],
  ): Generator<number> {
    if (CONFIG_CONSTANTS.step in config) {
      Validator.validateStep(config.step);
    }
    if (CONFIG_CONSTANTS.start in config) {
      Validator.validateStart(config.start);
    }
    if (CONFIG_CONSTANTS.m in config) {
      Validator.validateMFacets(config.m);
    }

    return spaceMapStrategy[strategyName].generate(config);
  }
}
