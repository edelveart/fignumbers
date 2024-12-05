import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type CenteredPolytopeConfig = StepParameterConfig;

export class CenteredPolytopeGenerator implements INumberGeneratorStrategy<CenteredPolytopeConfig> {
  *generate({ step = 1 }: CenteredPolytopeConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield (5 * delta ** 4 - 10 * delta ** 3 + 55 * delta ** 2 - 50 * delta + 24) / 24;
      delta += step;
    }
  }
}
