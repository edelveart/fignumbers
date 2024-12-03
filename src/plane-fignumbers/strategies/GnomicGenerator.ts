import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type GnomicConfig = StepParameterConfig;

export class GnomicGenerator implements INumberGeneratorStrategy<GnomicConfig> {
  *generate({ step = 1 }: GnomicConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield 2 * delta - 1;
      delta += step;
    }
  }
}
