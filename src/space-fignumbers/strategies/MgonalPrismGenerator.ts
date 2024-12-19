import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type MgonalPrismConfig = MConfigStepConfig;

export class MgonalPrismGenerator implements INumberGeneratorStrategy<MgonalPrismConfig> {
  *generate({ step = 1n, m = 3n }: MgonalPrismConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (m * delta ** 2n - m * delta + 2n)) / 2n;
      delta += step;
    }
  }
}
