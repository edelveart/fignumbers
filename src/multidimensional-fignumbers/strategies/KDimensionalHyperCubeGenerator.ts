import type { StartConfigMConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type KDimensionalHyperCubeConfig = StartConfigMConfigStepConfig;

export class KDimensionalHyperCubeGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperCubeConfig>
{
  *generate({ start = 1n, step = 1n, m = 5n }: KDimensionalHyperCubeConfig): Generator<bigint> {
    let delta = start;
    while (true) {
      yield delta ** m;
      delta += step;
    }
  }
}
