import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type FiveDimensionalMgonalPyramidalConfig = MfacetsStepParameterConfig;

export class FiveDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<FiveDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1, m = 4 }: FiveDimensionalMgonalPyramidalConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (delta + 1) * (delta + 2) * (delta + 3) * ((m - 2) * delta - m + 7)) / 120;
      delta += step;
    }
  }
}
