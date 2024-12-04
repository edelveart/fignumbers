import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTruncatedOctahedronConfig = StepParameterConfig;

export class CenteredTruncatedOctahedronGenerator
  implements INumberGeneratorStrategy<CenteredTruncatedOctahedronConfig>
{
  *generate({ step = 1 }: CenteredTruncatedOctahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((2 * delta - 1) * (23 * delta ** 2 - 23 * delta + 3)) / 3;
      delta += step;
    }
  }
}
