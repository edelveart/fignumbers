import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TetrahedralConfig = StepParameterConfig;

export class TetrahedralGenerator implements INumberGeneratorStrategy<TetrahedralConfig> {
  *generate({ step = 1 }: TetrahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (delta + 1) * (delta + 2)) / 6;
      delta += step;
    }
  }
}
