import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type AztecDiamondConfig = StepParameterConfig;

export class AztecDiamondGenerator implements INumberGeneratorStrategy<AztecDiamondConfig> {
  *generate({ step = 1 }: AztecDiamondConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield 2 * delta * (delta + 1);
      delta += step;
    }
  }
}
