import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type OctahedralConfig = StepParameterConfig;

export class OctahedralGenerator implements INumberGeneratorStrategy<OctahedralConfig> {
  *generate({ step = 1 }: OctahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (2 * delta ** 2 + 1)) / 3;
      delta += step;
    }
  }
}
