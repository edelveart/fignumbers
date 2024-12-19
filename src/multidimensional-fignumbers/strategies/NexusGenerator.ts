import type { KConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type NexusConfig = KConfigStepConfig;

export class NexusGenerator implements INumberGeneratorStrategy<NexusConfig> {
  *generate({ step = 1n, k = 3n }: NexusConfig): Generator<bigint> {
    let delta = 1n;
    yield 1n;
    while (true) {
      yield (delta + 1n) ** (k + 1n) - delta ** (k + 1n);
      delta += step;
    }
  }
}
