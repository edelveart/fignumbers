import type { StartConfigMConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedCenteredPolygonalConfig = StartConfigMConfigStepConfig;

export class TruncatedCenteredPolygonalGenerator
  implements INumberGeneratorStrategy<TruncatedCenteredPolygonalConfig>
{
  *generate({
    start = 1n,
    step = 1n,
    m = 3n,
  }: TruncatedCenteredPolygonalConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield 1n + (m * (7n * delta ** 2n - 11n * delta + 4n)) / 2n;
      delta += step;
    }
  }
}
