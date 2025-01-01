import {
  MULTIDIMENSIONAL_MAP_STRATEGY,
  type MultiDimensionalConfigMap,
} from "../mapped-types/MultiDimensionalMappedTypes.js";
import { Validator } from "../../core/validators/Validator.js";

export class MultiDimensionalFigNumbers<KMapStrategy extends keyof MultiDimensionalConfigMap> {
  private strategy: KMapStrategy;

  constructor(strategy: KMapStrategy) {
    this.strategy = strategy;
  }

  generate(config: MultiDimensionalConfigMap[KMapStrategy]): Generator<bigint> {
    Validator.validateConfig(config);
    return MULTIDIMENSIONAL_MAP_STRATEGY[this.strategy].generate(config);
  }
}
