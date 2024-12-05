import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperIcosahedralConfig = StepParameterConfig;

export class HyperIcosahedralGenerator implements INumberGeneratorStrategy<HyperIcosahedralConfig> {
  *generate({ step = 1 }: HyperIcosahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (145 * delta ** 3 - 280 * delta ** 2 + 179 * delta - 38)) / 6;
      delta += step;
    }
  }
}
