import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredMgonalPyramidConfig = MfacetsStepParameterConfig;

export class CenteredMgonalPyramidGenerator
  implements INumberGeneratorStrategy<CenteredMgonalPyramidConfig>
{
  *generate({ step = 1, m = 3 }: CenteredMgonalPyramidConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((m - 1) * ((delta - 1) * delta * (2 * delta - 1))) / 6 + (2 * delta - 1);
      delta += step;
    }
  }
}
