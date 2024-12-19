import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CubicConfig = StepConfig;

export class CubicGenerator implements INumberGeneratorStrategy<CubicConfig> {
  *generate({ step = 1n }: CubicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** 3n;
      delta += step;
    }
  }
}
