import type { MConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { factorialIter, risingFactorial } from "../utils/helpersMultidimensionalFigNumbers.js";

export type KDimensionalHyperTetrahedronConfig = MConfigStepConfig;

export class KDimensionalHyperTetrahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperTetrahedronConfig>
{
  *generate({ step = 1n, m = 4n }: KDimensionalHyperTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield risingFactorial(delta, m) / factorialIter(m);
      delta += step;
    }
  }
}
