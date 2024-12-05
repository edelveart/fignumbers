import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedTetrahedralConfig = StepParameterConfig;

export class TruncatedTetrahedralGenerator
  implements INumberGeneratorStrategy<TruncatedTetrahedralConfig>
{
  *generate({ step = 1n }: TruncatedTetrahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((23n * delta ** 2n - 27n * delta + 10n) * delta) / 6n;
      delta += step;
    }
  }
}
