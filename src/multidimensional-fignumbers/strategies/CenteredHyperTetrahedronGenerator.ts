import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredHyperTetrahedronConfig = StepConfig;

export class CenteredHyperTetrahedronGenerator
  implements INumberGeneratorStrategy<CenteredHyperTetrahedronConfig>
{
  *generate({ step = 1n }: CenteredHyperTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (5n * delta ** 4n - 10n * delta ** 3n + 55n * delta ** 2n - 50n * delta + 24n) / 24n;
      delta += step;
    }
  }
}
