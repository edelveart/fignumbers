import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type DodecahedralConfig = StepParameterConfig;

export class DodecahedralGenerator implements INumberGeneratorStrategy<DodecahedralConfig> {
  *generate({ step = 1 }: DodecahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (3 * delta - 1) * (3 * delta - 2)) / 2;
      delta += step;
    }
  }
}
