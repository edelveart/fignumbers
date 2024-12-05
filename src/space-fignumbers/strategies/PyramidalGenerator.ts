import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PyramidalConfig = StartStepMfacetsParameterConfig;

export class PyramidalGenerator implements INumberGeneratorStrategy<PyramidalConfig> {
  *generate({ start = 1, step = 1, m = 3 }: PyramidalConfig): Generator<number> {
    let delta = start;
    while (true) {
      yield (delta * (delta + 1) * ((m - 2) * delta - m + 5)) / 6;
      delta += step;
    }
  }
}
