import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PentatopeConfig = StepParameterConfig;

export class PentatopeGenerator implements INumberGeneratorStrategy<PentatopeConfig> {
  *generate({ step = 1 }: PentatopeConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (delta * (delta + 1) * (delta + 2) * (delta + 3)) / 24;
      delta += step;
    }
  }
}
