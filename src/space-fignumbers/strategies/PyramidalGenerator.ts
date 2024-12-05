import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PyramidalConfig = StartStepMfacetsParameterConfig;

export class PyramidalGenerator implements INumberGeneratorStrategy<PyramidalConfig> {
  *generate({ start = 1n, step = 1n, m = 3n }: PyramidalConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield (delta * (delta + 1n) * ((m - 2n) * delta - m + 5n)) / 6n;
      delta += step;
    }
  }
}
