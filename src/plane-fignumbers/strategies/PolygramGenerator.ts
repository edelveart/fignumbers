import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolygramConfig = MfacetsStepParameterConfig;

export class PolygramGenerator implements INumberGeneratorStrategy<PolygramConfig> {
  *generate({ step = 1, m = 3 }: PolygramConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield m * delta ** 2 - m * delta + 1;
      delta += step;
    }
  }
}
