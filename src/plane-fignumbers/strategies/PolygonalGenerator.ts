import type {
  StartConfigMConfigStepConfig,
  StartConfigStepConfig,
} from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolygonalConfig = StartConfigMConfigStepConfig;

export class PolygonalGenerator implements INumberGeneratorStrategy<PolygonalConfig> {
  *generate({ start = 1n, step = 1n, m = 3n }: PolygonalConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield ((m - 2n) * delta ** 2n - (m - 4n) * delta) / 2n;
      delta += step;
    }
  }
}

export class PolygonalSpecificGenerator implements INumberGeneratorStrategy<StartConfigStepConfig> {
  private m: bigint;
  private baseGenerator = new PolygonalGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ start = 1n, step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ start, step, m: this.m });
  }
}
