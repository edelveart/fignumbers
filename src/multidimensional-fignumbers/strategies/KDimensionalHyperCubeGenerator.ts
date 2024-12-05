import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalHyperCubeConfig = MfacetsStepParameterConfig;

export class KDimensionalHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperCubeConfig>
{
  *generate({ step = 1, m = 5 }: KDimensionalHyperCubeConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta ** m;
      delta += step;
    }
  }
}
