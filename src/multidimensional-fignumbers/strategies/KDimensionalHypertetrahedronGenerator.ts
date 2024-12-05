import type { MfacetsStepParameterConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { factorialIter, risingFactorial } from "../utils/helpersMultidimensionalFigNumbers.js";

export type KDimensionalHyperTetrahedronConfig = MfacetsStepParameterConfig;

export class KDimensionalHyperTetrahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperTetrahedronConfig>
{
  *generate({ step = 1, m = 4 }: KDimensionalHyperTetrahedronConfig): Generator<number> {
    let delta = 1;
    while (true) {
      yield risingFactorial(delta, m) / factorialIter(m);
      delta += step;
    }
  }
}
