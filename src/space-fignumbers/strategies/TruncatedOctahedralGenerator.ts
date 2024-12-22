import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedOctahedralConfig = StepConfig;

export class TruncatedOctahedralGenerator
  implements INumberGeneratorStrategy<TruncatedOctahedralConfig>
{
  *generate({ step = 1n }: TruncatedOctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 16n * delta ** 3n - 33n * delta ** 2n + 24n * delta - 6n;
      delta += step;
    }
  }
}
