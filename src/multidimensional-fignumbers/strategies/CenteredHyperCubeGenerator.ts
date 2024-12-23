import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredHyperCubeConfig = StepConfig;

export class CenteredHyperCubeGenerator
  implements INumberGeneratorStrategy<CenteredHyperCubeConfig>
{
  *generate({ step = 1n }: CenteredHyperCubeConfig): Generator<bigint> {
    let delta = 1n;
    let acc = 0n;
    while (true) {
      acc += delta ** 4n - (delta - 2n) ** 4n;
      yield acc + 1n;
      delta += step;
    }
  }
}
