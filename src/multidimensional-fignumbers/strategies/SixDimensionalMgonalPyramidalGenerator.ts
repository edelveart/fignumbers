import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type SixDimensionalMgonalPyramidalConfig = MConfigStepConfig;

export class SixDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<SixDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1n, m = 4n }: SixDimensionalMgonalPyramidalConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta *
        (delta + 1n) *
        (delta + 2n) *
        (delta + 3n) *
        (delta + 4n) *
        ((m - 2n) * delta - m + 8n)) /
        720n;
      delta += step;
    }
  }
}
