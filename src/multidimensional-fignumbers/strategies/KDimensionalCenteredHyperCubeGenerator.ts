import type { KConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalCenteredHyperCubeConfig = KConfigStepConfig;

export class KDimensionalCenteredHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalCenteredHyperCubeConfig>
{
  *generate({ step = 1n, k = 4n }: KDimensionalCenteredHyperCubeConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** k + (delta - 1n) ** k;
      delta += step;
    }
  }
}
