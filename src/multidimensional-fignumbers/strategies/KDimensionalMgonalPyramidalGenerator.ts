import type { KConfigMConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import {
  pseudoRisingFactorial,
  factorialIter,
} from "../utils/helpersMultidimensionalFigNumbers.js";

export type KDimensionalMgonalPyramidalConfig = KConfigMConfigStepConfig;

export class KDimensionalMgonalPyramidalGenerator
  implements INumberGeneratorStrategy<KDimensionalMgonalPyramidalConfig>
{
  *generate({ step = 1n, m = 4n, k = 4n }: KDimensionalMgonalPyramidalConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield (pseudoRisingFactorial(delta, k) * ((m - 2n) * delta - m + k + 2n)) / factorialIter(k);
      delta += step;
    }
  }
}
