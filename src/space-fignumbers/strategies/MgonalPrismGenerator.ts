import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type MgonalPrismConfig = MfacetsStepParameterConfig;

export class MgonalPrismGenerator implements INumberGeneratorStrategy<MgonalPrismConfig> {
  *generate({ step = 1, m = 3 }: MgonalPrismConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (m * delta ** 2 - m * delta + 2)) / 2;
      delta += step;
    }
  }
}
