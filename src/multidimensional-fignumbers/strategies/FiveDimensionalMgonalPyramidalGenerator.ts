import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type FiveDimensionalMgonalPyramidalConfig = MConfigStepConfig;

export class FiveDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<FiveDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1n, m = 4n }: FiveDimensionalMgonalPyramidalConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (delta + 1n) * (delta + 2n) * (delta + 3n) * ((m - 2n) * delta - m + 7n)) /
        120n;
      delta += step;
    }
  }
}
