import type { KConfigStartConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
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

export class KDimensionalHyperCubeSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private k: bigint;
  private baseGenerator = new KDimensionalHyperCubeGenerator();

  constructor(k: bigint) {
    this.k = k;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, k: this.k });
  }
}
