import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedCenteredPolygonalConfig = StartStepMfacetsParameterConfig;

export class TruncatedCenteredPolygonalGenerator
  implements INumberGeneratorStrategy<TruncatedCenteredPolygonalConfig>
{
  *generate({ start = 1, step = 1, m = 3 }: TruncatedCenteredPolygonalConfig): Generator<number> {
    let delta = start;
    while (true) {
      yield 1 + (m * (7 * delta ** 2 - 11 * delta + 4)) / 2;
      delta += step;
    }
  }
}
