import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type SixDimensionalMgonalPyramidalConfig = MfacetsStepParameterConfig;

export class SixDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<SixDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1, m = 4 }: SixDimensionalMgonalPyramidalConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta *
        (delta + 1) *
        (delta + 2) *
        (delta + 3) *
        (delta + 4) *
        ((m - 2) * delta - m + 8)) /
        720;
      delta += step;
    }
  }
}
