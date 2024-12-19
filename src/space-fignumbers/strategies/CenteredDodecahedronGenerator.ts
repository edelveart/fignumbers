import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredDodecahedronConfig = StepConfig;

export class CenteredDodecahedronGenerator
  implements INumberGeneratorStrategy<CenteredDodecahedronConfig>
{
  *generate({ step = 1n }: CenteredDodecahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta - 1n) * (3n * delta ** 2n - 3n * delta + 1n);
      delta += step;
    }
  }
}
