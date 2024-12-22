import type { MConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
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

export class CenteredMgonalPyramidalSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private m: bigint;
  private baseGenerator = new CenteredMgonalPyramidalGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, m: this.m });
  }
}
