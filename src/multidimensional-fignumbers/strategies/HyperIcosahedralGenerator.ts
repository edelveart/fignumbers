import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperIcosahedralConfig = StepConfig;

export class HyperIcosahedralGenerator implements INumberGeneratorStrategy<HyperIcosahedralConfig> {
  *generate({ step = 1n }: HyperIcosahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (145n * delta ** 3n - 280n * delta ** 2n + 179n * delta - 38n)) / 6n;
      delta += step;
    }
  }
}
