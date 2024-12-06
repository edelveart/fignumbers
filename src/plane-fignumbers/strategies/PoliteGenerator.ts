import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { log2BigInt } from "../utils/helpersPlaneFigNumbers.js";

export type PoliteConfig = StepParameterConfig;

export class PoliteGenerator implements INumberGeneratorStrategy<PoliteConfig> {
  *generate({ step = 1n }: PoliteConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield delta + log2BigInt(delta + log2BigInt(delta));
      delta += step;
    }
  }
}
