import type {
  StartConfigMConfigStepConfig,
  StartConfigStepConfig,
} from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type MgonalPrismConfig = StartConfigMConfigStepConfig;

export class MgonalPrismGenerator implements INumberGeneratorStrategy<MgonalPrismConfig> {
  *generate({ start = 1n, step = 1n, m = 3n }: MgonalPrismConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield (delta * (m * delta ** 2n - m * delta + 2n)) / 2n;
      delta += step;
    }
  }
}

export class MgonalPrismSpecificGenerator
  implements INumberGeneratorStrategy<StartConfigStepConfig>
{
  private m: bigint;
  private baseGenerator = new MgonalPrismGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ start = 1n, step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ start, step, m: this.m });
  }
}
