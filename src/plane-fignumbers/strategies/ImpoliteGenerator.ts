import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type ImpoliteConfig = StepParameterConfig;

export class ImpoliteGenerator implements INumberGeneratorStrategy<ImpoliteConfig> {
  *generate({ step = 1 }: ImpoliteConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield 2 ** delta;
      delta += step;
    }
  }
}
