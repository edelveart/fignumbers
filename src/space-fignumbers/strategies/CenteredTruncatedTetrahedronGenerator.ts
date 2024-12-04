import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTruncatedTetrahedronConfig = StepParameterConfig;

export class CenteredTruncatedTetrahedronGenerator
  implements INumberGeneratorStrategy<CenteredTruncatedTetrahedronConfig>
{
  *generate({ step = 1 }: CenteredTruncatedTetrahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((2 * delta - 1) * (7 * delta ** 2 - 7 * delta + 3)) / 3;
      delta += step;
    }
  }
}
