import type {
  StartConfigMConfigStepConfig,
  StartConfigStepConfig,
} from "../../core/types/ConfigTypes.js";
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

export class CenteredPolygonalSpecificGenerator
  implements INumberGeneratorStrategy<StartConfigStepConfig>
{
  private m: bigint;
  private baseGenerator = new CenteredPolygonalGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ start = 1n, step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ start, step, m: this.m });
  }
}
