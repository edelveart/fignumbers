import { type PlaneConfigMap, PLANE_MAP_STRATEGY } from "../mapped-types/PlaneMappedTypes.js";
import { Validator } from "../../core/validators/Validator.js";

export class PlaneFigNumbers<KMapStrategy extends keyof PlaneConfigMap> {
  private strategy: KMapStrategy;

  constructor(strategy: KMapStrategy) {
    this.strategy = strategy;
  }

  generate(config: PlaneConfigMap[KMapStrategy]): Generator<bigint> {
    Validator.validateConfig(config);
    return PLANE_MAP_STRATEGY[this.strategy].generate(config);
  }
}
