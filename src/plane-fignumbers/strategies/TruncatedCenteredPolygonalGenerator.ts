import type {
  StartConfigMConfigStepConfig,
  StartConfigStepConfig,
} from "../../core/types/ConfigTypes.js";
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

export class TruncatedCenteredPolygonalSpecificGenerator
  implements INumberGeneratorStrategy<StartConfigStepConfig>
{
  private m: bigint;
  private baseGenerator = new TruncatedCenteredPolygonalGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ start = 1n, step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ start, step, m: this.m });
  }
}
