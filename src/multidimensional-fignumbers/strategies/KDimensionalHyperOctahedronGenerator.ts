import type { KConfigStepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import {
  binomialCoeff,
  factorialIter,
  risingFactorial,
} from "../utils/helpersMultidimensionalFigNumbers.js";

export type KDimensionalHyperOctahedronConfig = KConfigStepConfig;

export class KDimensionalHyperOctahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalHyperOctahedronConfig>
{
  *generate({ step = 1n, k = 5n }: KDimensionalHyperOctahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      let acc = 0n;
      for (let i = 0n; i <= k - 1n; i++) {
        acc += (binomialCoeff(k - 1n, i) * risingFactorial(delta - i, k)) / factorialIter(k);
      }
      yield acc;
      delta += step;
    }
  }
}
