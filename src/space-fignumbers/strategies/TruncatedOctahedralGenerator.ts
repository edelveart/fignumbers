import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedOctahedralConfig = StepConfig;

export class TruncatedOctahedralGenerator
  implements INumberGeneratorStrategy<TruncatedOctahedralConfig>
{
  *generate({ step = 1n }: TruncatedOctahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (2n * delta ** 2n + 1n)) / 3n;
      delta += step;
    }
  }
}
