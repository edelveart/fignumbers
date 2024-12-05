import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type NexusConfig = MfacetsStepParameterConfig;

export class NexusGenerator implements INumberGeneratorStrategy<NexusConfig> {
  *generate({ step = 1n, m = 3n }: NexusConfig): Generator<bigint> {
    let delta = 1n;
    yield 1n;
    while (true) {
      yield (delta + 1n) ** (m + 1n) - delta ** (m + 1n);
      delta += step;
    }
  }
}
