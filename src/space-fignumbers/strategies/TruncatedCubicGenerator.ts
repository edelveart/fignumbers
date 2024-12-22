import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedCubicConfig = StepConfig;

export class TruncatedCubicGenerator implements INumberGeneratorStrategy<TruncatedCubicConfig> {
  *generate({ step = 1n }: TruncatedCubicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (3n * delta - 2n) ** 3n - (8n * (delta - 1n) * delta * (delta + 1n)) / 6n;
      delta += step;
    }
  }
}
