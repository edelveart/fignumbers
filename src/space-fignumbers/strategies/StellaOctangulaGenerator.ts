import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type StellaOctangulaConfig = StepParameterConfig;

export class StellaOctangulaGenerator implements INumberGeneratorStrategy<StellaOctangulaConfig> {
  *generate({ step = 1 }: StellaOctangulaConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta * (2 * delta ** 2 - 1);
      delta += step;
    }
  }
}
