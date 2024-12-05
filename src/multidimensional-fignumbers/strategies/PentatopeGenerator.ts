import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PentatopeConfig = StepParameterConfig;

export class PentatopeGenerator implements INumberGeneratorStrategy<PentatopeConfig> {
  *generate({ step = 1n }: PentatopeConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (delta + 1n) * (delta + 2n) * (delta + 3n)) / 24n;
      delta += step;
    }
  }
}
