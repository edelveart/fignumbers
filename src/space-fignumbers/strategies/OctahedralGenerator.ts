import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type OctahedralConfig = StepConfig;

export class OctahedralGenerator implements INumberGeneratorStrategy<OctahedralConfig> {
  *generate({ step = 1n }: OctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (2n * delta ** 2n + 1n)) / 3n;
      delta += step;
    }
  }
}
