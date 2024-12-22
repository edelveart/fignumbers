import type { MConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PolygramConfig = MConfigStepConfig;

export class PolygramGenerator implements INumberGeneratorStrategy<PolygramConfig> {
  *generate({ step = 1n, m = 3n }: PolygramConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield m * delta ** 2n - m * delta + 1n;
      delta += step;
    }
  }
}

export class PolygramSpecificGenerator implements INumberGeneratorStrategy<StepConfig> {
  private m: bigint;
  private baseGenerator = new PolygramGenerator();

  constructor(m: bigint) {
    this.m = m;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, m: this.m });
  }
}
