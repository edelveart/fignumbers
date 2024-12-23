import type { KConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { factorialIter, risingFactorial } from "../utils/helpersMultidimensionalFigNumbers.js";

export type KDimensionalHyperTetrahedronConfig = KConfigStepConfig;

export class KDimensionalHyperTetrahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperTetrahedronConfig>
{
  *generate({ step = 1n, k = 4n }: KDimensionalHyperTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield risingFactorial(delta, k) / factorialIter(k);
      delta += step;
    }
  }
}

export class KDimensionalHyperTetrahedronSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private k: bigint;
  private baseGenerator = new KDimensionalHyperTetrahedronGenerator();

  constructor(k: bigint) {
    this.k = k;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, k: this.k });
  }
}
