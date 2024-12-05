import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PronicConfig = StepParameterConfig;

export class PronicGenerator implements INumberGeneratorStrategy<PronicConfig> {
  *generate({ step = 1n }: PronicConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta * (delta + 1n);
      delta += step;
    }
  }
}
