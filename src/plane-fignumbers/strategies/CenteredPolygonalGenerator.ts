import type { StartConfigMConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredPolygonalConfig = StartConfigMConfigStepConfig;

export class CenteredPolygonalGenerator
  implements INumberGeneratorStrategy<CenteredPolygonalConfig>
{
  *generate({ start = 1n, step = 1n, m = 3n }: CenteredPolygonalConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield (m * delta ** 2n - m * delta + 2n) / 2n;
      delta += step;
    }
  }
}
