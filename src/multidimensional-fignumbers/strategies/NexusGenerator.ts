import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type NexusConfig = MfacetsStepParameterConfig;

export class NexusGenerator implements INumberGeneratorStrategy<NexusConfig> {
  *generate({ step = 1, m = 3 }: NexusConfig): Generator<number> {
    let delta = 1;
    yield 1;
    while (true) {
      yield (delta + 1) ** (m + 1) - delta ** (m + 1);
      delta += step;
    }
  }
}
