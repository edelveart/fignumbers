import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperTetrahedralConfig = StepConfig;

export class HyperTetrahedralGenerator implements INumberGeneratorStrategy<HyperTetrahedralConfig> {
  *generate({ step = 1n }: HyperTetrahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (delta + 1n) * (delta + 2n) * (delta + 3n)) / 24n;
      delta += step;
    }
  }
}
