import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PyramidalConfig = MfacetsStepParameterConfig;

export class PyramidalGenerator implements INumberGeneratorStrategy<PyramidalConfig> {
  *generate({ step = 1, m = 3 }: PyramidalConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (delta + 1) * ((m - 2) * delta - m + 5)) / 6;
      delta += step;
    }
  }
}
