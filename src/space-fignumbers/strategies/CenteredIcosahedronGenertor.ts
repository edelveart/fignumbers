import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredIcosahedronConfig = StepParameterConfig;

export class CenteredIcosahedronGenerator
  implements INumberGeneratorStrategy<CenteredIcosahedronConfig>
{
  *generate({ step = 1 }: CenteredIcosahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((2 * delta - 1) * (2 * delta ** 2 - 2 * delta + 3)) / 3;
      delta += step;
    }
  }
}
