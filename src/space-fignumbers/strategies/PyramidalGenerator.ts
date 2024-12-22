import type {
  StartConfigMConfigStepConfig,
  StartConfigStepConfig,
} from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PyramidalConfig = StartConfigMConfigStepConfig;

export class PyramidalGenerator implements INumberGeneratorStrategy<PyramidalConfig> {
  *generate({ start = 1n, step = 1n, m = 3n }: PyramidalConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield (delta * (delta + 1n) * ((m - 2n) * delta - m + 5n)) / 6n;
      delta += step;
    }
  }
}

export class PyramidalSpecificGenerator implements INumberGeneratorStrategy<StartConfigStepConfig> {
  private m: bigint;
  private baseGenerator = new PyramidalGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ start = 1n, step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ start, step, m: this.m });
  }
}
