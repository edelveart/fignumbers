import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type ImpoliteConfig = StepParameterConfig;

export class ImpoliteGenerator implements INumberGeneratorStrategy<ImpoliteConfig> {
  *generate({ step = 1n }: ImpoliteConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 2n ** delta;
      delta += step;
    }
  }
}
