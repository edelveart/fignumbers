import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTruncatedTetrahedronConfig = StepConfig;

export class CenteredTruncatedTetrahedronGenerator
  implements INumberGeneratorStrategy<CenteredTruncatedTetrahedronConfig>
{
  *generate({ step = 1n }: CenteredTruncatedTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((2n * delta - 1n) * (7n * delta ** 2n - 7n * delta + 3n)) / 3n;
      delta += step;
    }
  }
}
