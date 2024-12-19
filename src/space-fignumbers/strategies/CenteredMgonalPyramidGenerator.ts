import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredMgonalPyramidConfig = MConfigStepConfig;

export class CenteredMgonalPyramidGenerator
  implements INumberGeneratorStrategy<CenteredMgonalPyramidConfig>
{
  *generate({ step = 1n, m = 3n }: CenteredMgonalPyramidConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield ((m - 1n) * ((delta - 1n) * delta * (2n * delta - 1n))) / 6n + (2n * delta - 1n);
      delta += step;
    }
  }
}
