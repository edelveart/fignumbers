import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type IcosahedralConfig = StepConfig;

export class IcosahedralGenerator implements INumberGeneratorStrategy<IcosahedralConfig> {
  *generate({ step = 1n }: IcosahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (5n * delta ** 2n - 5n * delta + 2n)) / 2n;
      delta += step;
    }
  }
}
