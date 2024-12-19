import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type FourDimensionalMgonalPyramidalConfig = MConfigStepConfig;

export class FourDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<FourDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1n, m = 4n }: FourDimensionalMgonalPyramidalConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (delta + 1n) * (delta + 2n) * ((m - 2n) * delta - m + 6n)) / 24n;
      delta += step;
    }
  }
}
