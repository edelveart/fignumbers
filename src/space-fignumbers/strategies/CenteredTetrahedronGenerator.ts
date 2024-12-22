import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTetrahedronConfig = StepConfig;

export class CenteredTetrahedronGenerator
  implements INumberGeneratorStrategy<CenteredTetrahedronConfig>
{
  *generate({ step = 1n }: CenteredTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((2n * delta - 1n) * (delta ** 2n - delta + 3n)) / 3n;
      delta += step;
    }
  }
}
