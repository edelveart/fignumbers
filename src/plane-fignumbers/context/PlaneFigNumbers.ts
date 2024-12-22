import { type PlaneConfigMap, PLANE_MAP_STRATEGY } from "../mapped-types/PlaneMappedTypes.js";
import { CONFIG_CONSTANTS } from "../../core/types/configConstants.js";
import { Validator } from "../../core/validators/Validator.js";

export class PlaneFigNumbers {
  static generate<KMap extends keyof PlaneConfigMap>(
    strategyName: KMap,
    config: PlaneConfigMap[KMap],
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

    return PLANE_MAP_STRATEGY[strategyName].generate(config);
  }
}
