import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolygramConfig = MfacetsStepParameterConfig;

export class PolygramGenerator implements INumberGeneratorStrategy<PolygramConfig> {
  *generate({ step = 1n, m = 3n }: PolygramConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield m * delta ** 2n - m * delta + 1n;
      delta += step;
    }
  }
}
