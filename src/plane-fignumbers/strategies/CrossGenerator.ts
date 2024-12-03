import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CrossConfig = StepParameterConfig;

export class CrossGenerator implements INumberGeneratorStrategy<CrossConfig> {
  *generate({ step = 1 }: CrossConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield 4 * delta - 3;
      delta += step;
    }
  }
}
