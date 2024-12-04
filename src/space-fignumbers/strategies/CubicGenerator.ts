import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CubicConfig = StepParameterConfig;

export class CubicGenerator implements INumberGeneratorStrategy<CubicConfig> {
  *generate({ step = 1 }: CubicConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** 3;
      delta += step;
    }
  }
}
