import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TetrahedralConfig = StepParameterConfig;

export class TetrahedralGenerator implements INumberGeneratorStrategy<TetrahedralConfig> {
  *generate({ step = 1n }: TetrahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (delta + 1n) * (delta + 2n)) / 6n;
      delta += step;
    }
  }
}
