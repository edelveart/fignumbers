import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedTetrahedralConfig = StepParameterConfig;

export class TruncatedTetrahedralGenerator
  implements INumberGeneratorStrategy<TruncatedTetrahedralConfig>
{
  *generate({ step = 1 }: TruncatedTetrahedralConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield ((23 * delta ** 2 - 27 * delta + 10) * delta) / 6;
      delta += step;
    }
  }
}
