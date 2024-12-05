import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredHyperOctahedralConfig = StepParameterConfig;

export class CenteredHyperOctahedralGenerator
  implements INumberGeneratorStrategy<CenteredHyperOctahedralConfig>
{
  *generate({ step = 1 }: CenteredHyperOctahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (2 * delta ** 4 - 4 * delta ** 3 + 10 * delta ** 2 - 8 * delta + 3) / 3;
      delta += step;
    }
  }
}
