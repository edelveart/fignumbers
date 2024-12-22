import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type RhombicDodecahedralConfig = StepConfig;

export class RhombicDodecahedralGenerator
  implements INumberGeneratorStrategy<RhombicDodecahedralConfig>
{
  *generate({ step = 1n }: RhombicDodecahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta - 1n) * (2n * delta ** 2n - 2n * delta + 1n);
      delta += step;
    }
  }
}
