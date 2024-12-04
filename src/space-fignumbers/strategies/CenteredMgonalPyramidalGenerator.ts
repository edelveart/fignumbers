import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredMgonalPyramidalConfig = MfacetsStepParameterConfig;

export class CenteredMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<CenteredMgonalPyramidalConfig>
{
  *generate({ step = 1, m = 3 }: CenteredMgonalPyramidalConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (m * delta ** 3 + delta * (6 - m)) / 6;
      delta += step;
    }
  }
}
