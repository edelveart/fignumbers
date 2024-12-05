import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalHyperCubeConfig = StartStepMfacetsParameterConfig;

export class KDimensionalHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperCubeConfig>
{
  *generate({ start = 1n, step = 1n, m = 5n }: KDimensionalHyperCubeConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield delta ** m;
      delta += step;
    }
  }
}
