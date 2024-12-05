import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type AztecDiamondConfig = StepParameterConfig;

export class AztecDiamondGenerator implements INumberGeneratorStrategy<AztecDiamondConfig> {
  *generate({ step = 1n }: AztecDiamondConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield 2n * delta * (delta + 1n);
      delta += step;
    }
  }
}
