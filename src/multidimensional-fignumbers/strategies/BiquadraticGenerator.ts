import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type BiquadraticConfig = StepConfig;

export class BiquadraticGenerator implements INumberGeneratorStrategy<BiquadraticConfig> {
  *generate({ step = 1n }: BiquadraticConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** 4n;
      delta += step;
    }
  }
}
