import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CrossConfig = StepParameterConfig;

export class CrossGenerator implements INumberGeneratorStrategy<CrossConfig> {
  *generate({ step = 1n }: CrossConfig): Generator<bigint> {
    let delta: bigint = 1n;
    while (true) {
      yield 4n * delta - 3n;
      delta += step;
    }
  }
}
