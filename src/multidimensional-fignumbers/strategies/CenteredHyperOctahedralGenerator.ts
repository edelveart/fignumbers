import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredHyperOctahedralConfig = StepParameterConfig;

export class CenteredHyperOctahedralGenerator
  implements INumberGeneratorStrategy<CenteredHyperOctahedralConfig>
{
  *generate({ step = 1n }: CenteredHyperOctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta ** 4n - 4n * delta ** 3n + 10n * delta ** 2n - 8n * delta + 3n) / 3n;
      delta += step;
    }
  }
}
