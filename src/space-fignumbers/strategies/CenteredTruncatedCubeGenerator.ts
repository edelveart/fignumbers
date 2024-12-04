import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredTruncatedCubeConfig = StepParameterConfig;

export class CenteredTruncatedCubeGenerator
  implements INumberGeneratorStrategy<CenteredTruncatedCubeConfig>
{
  *generate({ step = 1 }: CenteredTruncatedCubeConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((2 * delta - 1) * (23 * delta ** 2 - 23 * delta + 3)) / 3;
      delta += step;
    }
  }
}
