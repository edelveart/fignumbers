import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredOctahedronConfig = StepParameterConfig;

export class CenteredOctahedronGenerator
  implements INumberGeneratorStrategy<CenteredOctahedronConfig>
{
  *generate({ step = 1n }: CenteredOctahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((2n * delta - 1n) * (2n * delta ** 2n - 2n * delta + 3n)) / 3n;
      delta += step;
    }
  }
}
