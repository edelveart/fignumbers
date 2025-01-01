import { SPACE_MAP_STRATEGY, type SpaceConfigMap } from "../mapped-types/SpaceMappedTypes.js";
import { Validator } from "../../core/validators/Validator.js";

export class SpaceFigNumbers<KMapStrategy extends keyof SpaceConfigMap> {
  private strategy: KMapStrategy;

  constructor(strategy: KMapStrategy) {
    this.strategy = strategy;
  }

  generate(config: SpaceConfigMap[KMapStrategy]): Generator<bigint> {
    Validator.validateConfig(config);
    return SPACE_MAP_STRATEGY[this.strategy].generate(config);
  }
}
