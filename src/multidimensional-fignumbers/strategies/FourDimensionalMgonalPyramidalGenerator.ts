import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type FourDimensionalMgonalPyramidalConfig = MfacetsStepParameterConfig;

export class FourDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<FourDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1, m = 4 }: FourDimensionalMgonalPyramidalConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (delta + 1) * (delta + 2) * ((m - 2) * delta - m + 6)) / 24;
      delta += step;
    }
  }
}
