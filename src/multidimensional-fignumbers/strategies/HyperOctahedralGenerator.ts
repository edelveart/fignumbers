import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperOctahedralConfig = StepParameterConfig;

export class HyperOctahedralGenerator implements INumberGeneratorStrategy<HyperOctahedralConfig> {
  *generate({ step = 1n }: HyperOctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta ** 2n * (delta ** 2n + 2n)) / 3n;
      delta += step;
    }
  }
}
