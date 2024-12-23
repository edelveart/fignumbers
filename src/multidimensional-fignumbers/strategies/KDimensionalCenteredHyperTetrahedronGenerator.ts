import type { KConfigStepConfig, StepConfig } from "../../core/types/ConfigTypes.js";
import type { INumberGeneratorStrategy } from "../../core/interfaces/INumberGeneratorStrategy.js";
import { binomialCoeff } from "../utils/helpersMultidimensionalFigNumbers.js";

const helperCenteredHyperTetrahedron = (k: bigint, n: bigint): bigint => {
  if (n === 1n) return 1n;
  if (n === 2n) return k + 1n;

  let tau = 0n;
  for (let i = 0n; i <= k - 1n; i++) {
    tau += binomialCoeff(k + 1n, k - i) * binomialCoeff(n - 2n, i);
  }

  return tau;
};

const accHelperCenteredHyperTetrahedron = (k: bigint, n: bigint) => {
  let acc = 0n;
  for (let j = 1n; j <= n; j++) {
    acc += helperCenteredHyperTetrahedron(k, j);
  }
  return acc;
};

export type KDimensionalCenteredHyperTetrahedronConfig = KConfigStepConfig;

export class KDimensionalCenteredHyperTetrahedronGenerator
  implements INumberGeneratorStrategy<KDimensionalCenteredHyperTetrahedronConfig>
{
  *generate({ step = 1n, k = 5n }: KDimensionalCenteredHyperTetrahedronConfig): Generator<bigint> {
    let delta = 1n;
    while (true) {
      yield accHelperCenteredHyperTetrahedron(k, delta);
      delta += step;
    }
  }
}

export class KDimensionalCenteredHyperTetrahedronSpecificGenerator
  implements INumberGeneratorStrategy<StepConfig>
{
  private k: bigint;
  private baseGenerator = new KDimensionalCenteredHyperTetrahedronGenerator();

  constructor(k: bigint) {
    this.k = k;
  }

  *generate({ step = 1n }): Generator<bigint> {
    return yield* this.baseGenerator.generate({ step, k: this.k });
  }
}
