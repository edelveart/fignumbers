import type { KConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { binomialCoeff } from "../utils/helpersMultidimensionalFigNumbers.js";

const exteriorInteriorDoubleSummation = (k: bigint, n: bigint): bigint => {
  let acc = 0n;
  for (let j = 1n; j <= n - 1n; j++) {
    for (let i = 0n; i <= k - 1n; i++) {
      acc += 2n ** (1n + i) * binomialCoeff(k, 1n + i) * binomialCoeff(j, i);
    }
  }

  return 2n * k + acc + 1n;
};

export type KDimensionalCenteredHyperOctahedronConfig = KConfigStepConfig;

export class KDimensionalCenteredHyperOctahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalCenteredHyperOctahedronConfig>
{
  *generate({ step = 1n, k = 5n }: KDimensionalCenteredHyperOctahedronConfig): Generator<bigint> {
    let delta = 1n;
    yield 1n;
    while (true) {
      yield exteriorInteriorDoubleSummation(k, delta);
      delta += step;
    }
  }
}

export class KDimensionalCenteredHyperOctahedronSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private k: bigint;
  private baseGenerator = new KDimensionalCenteredHyperOctahedronGenerator();

  constructor(k: bigint) {
    this.k = k;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, k: this.k });
  }
}
