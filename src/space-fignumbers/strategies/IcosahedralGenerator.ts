import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type IcosahedralConfig = StepParameterConfig;

export class IcosahedralGenerator implements INumberGeneratorStrategy<IcosahedralConfig> {
  *generate({ step = 1 }: IcosahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (5 * delta ** 2 - 5 * delta + 2)) / 2;
      delta += step;
    }
  }
}
