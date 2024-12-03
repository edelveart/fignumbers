import type { StartStepMfacetsParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolygonalConfig = StartStepMfacetsParameterConfig;

export class PolygonalGenerator implements INumberGeneratorStrategy<PolygonalConfig> {
  *generate({ start = 1, step = 1, m = 3 }: PolygonalConfig): Generator<number> {
    let delta = start;
    while (true) {
      yield ((m - 2) * delta ** 2 - (m - 4) * delta) / 2;
      delta += step;
    }
  }
}
