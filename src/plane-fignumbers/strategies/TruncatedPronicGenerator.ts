import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type TruncatedPronicConfig = StepConfig;

export class TruncatedPronicGenerator implements INumberGeneratorStrategy<TruncatedPronicConfig> {
  *generate({ step = 1n }: TruncatedPronicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 7n * delta ** 2n - 7n * delta + 2n;
      delta += step;
    }
  }
}
