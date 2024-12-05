import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalHyperCubeConfig = StartStepMfacetsParameterConfig;

export class KDimensionalHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperCubeConfig>
{
  *generate({ start = 1, step = 1, m = 5 }: KDimensionalHyperCubeConfig): Generator<number> {
    let delta = start;
    while (true) {
      yield delta ** m;
      delta += step;
    }
  }
}
