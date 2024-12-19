import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredMgonalPyramidalConfig = MConfigStepConfig;

export class CenteredMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<CenteredMgonalPyramidalConfig>
{
  *generate({ step = 1n, m = 3n }: CenteredMgonalPyramidalConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (m * delta ** 3n + delta * (6n - m)) / 6n;
      delta += step;
    }
  }
}
