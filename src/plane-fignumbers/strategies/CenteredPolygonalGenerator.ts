import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredPolygonalConfig = StartStepMfacetsParameterConfig;

export class CenteredPolygonalGenerator
  implements INumberGeneratorStrategy<CenteredPolygonalConfig>
{
  *generate({ start = 1, step = 1, m = 3 }: CenteredPolygonalConfig): Generator<number> {
    let delta = start;
    while (true) {
      yield (m * delta ** 2 - m * delta + 2) / 2;
      delta += step;
    }
  }
}
