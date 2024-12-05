import type { StepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";

export type HyperDodecahedralConfig = StepParameterConfig;

export class HyperDodecahedralGenerator
  implements INumberGeneratorStrategy<HyperDodecahedralConfig>
{
  *generate({ step = 1n }: HyperDodecahedralConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (delta * (261n * delta ** 3n - 504n * delta ** 2n + 283n * delta - 38n)) / 2n;
      delta += step;
    }
  }
}
