import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedCubicConfig = StepConfig;

export class TruncatedCubicGenerator implements INumberGeneratorStrategy<TruncatedCubicConfig> {
  *generate({ step = 1n }: TruncatedCubicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** 3n;
      delta += step;
    }
  }
}
