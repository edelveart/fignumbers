import type { StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredPolytopeConfig = StepConfig;

export class CenteredPolytopeGenerator implements INumberGeneratorStrategy<CenteredPolytopeConfig> {
  *generate({ step = 1n }: CenteredPolytopeConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (5n * delta ** 4n - 10n * delta ** 3n + 55n * delta ** 2n - 50n * delta + 24n) / 24n;
      delta += step;
    }
  }
}
