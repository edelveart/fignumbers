import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolyOctahedralConfig = StepConfig;

export class PolyOctahedralGenerator implements INumberGeneratorStrategy<PolyOctahedralConfig> {
  *generate({ step = 1n }: PolyOctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** 2n * (3n * delta ** 2n - 4n * delta + 2n);
      delta += step;
    }
  }
}
