import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedOctahedralConfig = StepParameterConfig;

export class TruncatedOctahedralGenerator
  implements INumberGeneratorStrategy<TruncatedOctahedralConfig>
{
  *generate({ step = 1 }: TruncatedOctahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (2 * delta ** 2 + 1)) / 3;
      delta += step;
    }
  }
}
