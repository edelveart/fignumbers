import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type BiquadraticConfig = StepParameterConfig;

export class BiquadraticGenerator implements INumberGeneratorStrategy<BiquadraticConfig> {
  *generate({ step = 1 }: BiquadraticConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** 4;
      delta += step;
    }
  }
}
