import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type StellaOctangulaConfig = StepParameterConfig;

export class StellaOctangulaGenerator implements INumberGeneratorStrategy<StellaOctangulaConfig> {
  *generate({ step = 1n }: StellaOctangulaConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta * (2n * delta ** 2n - 1n);
      delta += step;
    }
  }
}
