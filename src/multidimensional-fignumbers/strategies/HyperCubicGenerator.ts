import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperCubicConfig = StepConfig;

export class HyperCubicGenerator implements INumberGeneratorStrategy<HyperCubicConfig> {
  *generate({ step = 1n }: HyperCubicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** 4n;
      delta += step;
    }
  }
}
