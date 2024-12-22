import type { MConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
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

export class CenteredMgonalPyramidSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private m: bigint;
  private baseGenerator = new CenteredMgonalPyramidGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, m: this.m });
  }
}
