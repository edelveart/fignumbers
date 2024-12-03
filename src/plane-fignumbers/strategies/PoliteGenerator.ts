import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PoliteConfig = StepParameterConfig;

export class PoliteGenerator implements INumberGeneratorStrategy<PoliteConfig> {
  *generate({ step = 1 }: PoliteConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta + Math.floor(Math.log2(delta + Math.log2(delta)));
      delta += step;
    }
  }
}
