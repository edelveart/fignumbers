import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperOctahedralConfig = StepParameterConfig;

export class HyperOctahedralGenerator implements INumberGeneratorStrategy<HyperOctahedralConfig> {
  *generate({ step = 1 }: HyperOctahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta ** 2 * (delta ** 2 + 2)) / 3;
      delta += step;
    }
  }
}
