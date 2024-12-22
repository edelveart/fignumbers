import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredCubeConfig = StepConfig;

export class CenteredCubeGenerator implements INumberGeneratorStrategy<CenteredCubeConfig> {
  *generate({ step = 1n }: CenteredCubeConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (2n * delta - 1n) * (delta ** 2n - delta + 1n);
      delta += step;
    }
  }
}
