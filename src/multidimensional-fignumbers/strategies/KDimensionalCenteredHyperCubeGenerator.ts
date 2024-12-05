import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalCenteredHyperCubeConfig = MfacetsStepParameterConfig;

export class KDimensionalCenteredHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalCenteredHyperCubeConfig>
{
  *generate({ step = 1n, m = 4n }: KDimensionalCenteredHyperCubeConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta ** m + (delta - 1n) ** m;
      delta += step;
    }
  }
}
