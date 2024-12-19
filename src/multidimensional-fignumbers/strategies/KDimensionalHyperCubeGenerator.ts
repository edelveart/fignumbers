import type { KConfigStartConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalHyperCubeConfig = KConfigStartConfigStepConfig;

export class KDimensionalHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperCubeConfig>
{
  *generate({ start = 1n, step = 1n, k = 5n }: KDimensionalHyperCubeConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield delta ** k;
      delta += step;
    }
  }
}
