import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedCubicConfig = StepParameterConfig;

export class TruncatedCubicGenerator implements INumberGeneratorStrategy<TruncatedCubicConfig> {
  *generate({ step = 1 }: TruncatedCubicConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** 3;
      delta += step;
    }
  }
}
