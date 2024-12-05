import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredIcosahedronConfig = StepParameterConfig;

export class CenteredIcosahedronGenerator
  implements INumberGeneratorStrategy<CenteredIcosahedronConfig>
{
  *generate({ step = 1n }: CenteredIcosahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((2n * delta - 1n) * (5n * delta ** 2n - 5n * delta + 3n)) / 3n;
      delta += step;
    }
  }
}
