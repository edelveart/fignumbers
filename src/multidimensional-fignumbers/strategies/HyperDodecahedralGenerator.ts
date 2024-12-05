import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperDodecahedralConfig = StepParameterConfig;

export class HyperDodecahedralGenerator
  implements INumberGeneratorStrategy<HyperDodecahedralConfig>
{
  *generate({ step = 1 }: HyperDodecahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (261 * delta ** 3 - 504 * delta ** 2 + 283 * delta - 38)) / 2;
      delta += step;
    }
  }
}
