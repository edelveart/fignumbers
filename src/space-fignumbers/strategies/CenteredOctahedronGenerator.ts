import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredOctahedronConfig = StepParameterConfig;

export class CenteredOctahedronGenerator
  implements INumberGeneratorStrategy<CenteredOctahedronConfig>
{
  *generate({ step = 1 }: CenteredOctahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((2 * delta - 1) * (2 * delta ** 2 - 2 * delta + 3)) / 3;
      delta += step;
    }
  }
}
