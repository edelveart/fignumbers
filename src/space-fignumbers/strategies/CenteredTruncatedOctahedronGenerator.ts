import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTruncatedOctahedronConfig = StepConfig;

export class CenteredTruncatedOctahedronGenerator
  implements INumberGeneratorStrategy<CenteredTruncatedOctahedronConfig>
{
  *generate({ step = 1n }: CenteredTruncatedOctahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta - 1n) * (5n * delta ** 2n - 5n * delta + 1n);
      delta += step;
    }
  }
}
