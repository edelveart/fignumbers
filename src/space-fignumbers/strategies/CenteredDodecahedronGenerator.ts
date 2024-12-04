import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredDodecahedronConfig = StepParameterConfig;

export class CenteredDodecahedronGenerator
  implements INumberGeneratorStrategy<CenteredDodecahedronConfig>
{
  *generate({ step = 1 }: CenteredDodecahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (2 * delta - 1) * (3 * delta ** 2 - 3 * delta + 1);
      delta += step;
    }
  }
}
