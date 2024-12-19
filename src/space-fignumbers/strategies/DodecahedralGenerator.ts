import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type DodecahedralConfig = StepConfig;

export class DodecahedralGenerator implements INumberGeneratorStrategy<DodecahedralConfig> {
  *generate({ step = 1n }: DodecahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (3n * delta - 1n) * (3n * delta - 2n)) / 2n;
      delta += step;
    }
  }
}
