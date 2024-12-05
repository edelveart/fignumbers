import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalCenteredHyperCubeConfig = MfacetsStepParameterConfig;

export class KDimensionalCenteredHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalCenteredHyperCubeConfig>
{
  *generate({ step = 1, m = 4 }: KDimensionalCenteredHyperCubeConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** m + (delta - 1) ** m;
      delta += step;
    }
  }
}
