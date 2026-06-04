import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type GnomonicConfig = StepConfig;

export class GnomonicGenerator implements INumberGeneratorStrategy<GnomonicConfig> {
  *generate({ step = 1n }: GnomonicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 2n * delta - 1n;
      delta += step;
    }
  }
}
