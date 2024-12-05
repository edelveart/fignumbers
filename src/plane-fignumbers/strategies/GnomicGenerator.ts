import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type GnomicConfig = StepParameterConfig;

export class GnomicGenerator implements INumberGeneratorStrategy<GnomicConfig> {
  *generate({ step = 1n }: GnomicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 2n * delta - 1n;
      delta += step;
    }
  }
}
