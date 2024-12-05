import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolyOctahedralConfig = StepParameterConfig;

export class PolyOctahedralGenerator implements INumberGeneratorStrategy<PolyOctahedralConfig> {
  *generate({ step = 1 }: PolyOctahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** 2 * (3 * delta ** 2 - 4 * delta + 2);
      delta += step;
    }
  }
}
