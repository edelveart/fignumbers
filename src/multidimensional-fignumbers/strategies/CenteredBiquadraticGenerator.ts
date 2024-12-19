import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredBiquadraticConfig = StepConfig;

export class CenteredBiquadraticGenerator
  implements INumberGeneratorStrategy<CenteredBiquadraticConfig>
{
  *generate({ step = 1n }: CenteredBiquadraticConfig): Generator<bigint> {
    let delta = 1n;
    let acc = 0n;
    while (true) {
      acc += delta ** 4n - (delta - 2n) ** 4n;
      yield acc + 1n;
      delta += step;
    }
  }
}
