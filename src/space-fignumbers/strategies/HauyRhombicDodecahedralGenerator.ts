import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HauyRhombicDodecahedralConfig = StepConfig;

export class HauyRhombicDodecahedralGenerator
  implements INumberGeneratorStrategy<HauyRhombicDodecahedralConfig>
{
  *generate({ step = 1n }: HauyRhombicDodecahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta - 1n) * (8n * delta ** 2n - 14n * delta + 7n);
      delta += step;
    }
  }
}
