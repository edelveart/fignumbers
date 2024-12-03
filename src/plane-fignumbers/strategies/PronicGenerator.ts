import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type PronicConfig = StepParameterConfig;

export class PronicGenerator implements INumberGeneratorStrategy<PronicConfig> {
  *generate({ step = 1 }: PronicConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield delta * (delta + 1);
      delta += step;
    }
  }
}
