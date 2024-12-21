import type { MappedTypeStrategy } from "../../core/mapped-types/MappedTypeStrategy.js";

import {
  BiquadraticGenerator,
  CenteredHyperOctahedralGenerator,
  CenteredPolytopeGenerator,
  FiveDimensionalMgonalPyramidalGenerator,
  FourDimensionalMgonalPyramidalGenerator,
  HyperDodecahedralGenerator,
  HyperIcosahedralGenerator,
  HyperOctahedralGenerator,
  KDimensionalCenteredHyperCubeGenerator,
  KDimensionalHyperCubeGenerator,
  KDimensionalHyperTetrahedronGenerator,
  NexusGenerator,
  PentatopeGenerator,
  PolyOctahedralGenerator,
  SixDimensionalMgonalPyramidalGenerator,
  CenteredBiquadraticGenerator,
  KDimensionalMgonalPyramidalGenerator,
  KDimensionalHyperOctahedronGenerator,
  type BiquadraticConfig,
  type CenteredHyperOctahedralConfig,
  type CenteredPolytopeConfig,
  type FiveDimensionalMgonalPyramidalConfig,
  type FourDimensionalMgonalPyramidalConfig,
  type HyperDodecahedralConfig,
  type HyperIcosahedralConfig,
  type HyperOctahedralConfig,
  type KDimensionalCenteredHyperCubeConfig,
  type KDimensionalHyperCubeConfig,
  type KDimensionalHyperTetrahedronConfig,
  type NexusConfig,
  type PentatopeConfig,
  type PolyOctahedralConfig,
  type SixDimensionalMgonalPyramidalConfig,
  type CenteredBiquadraticConfig,
  type KDimensionalMgonalPyramidalConfig,
  type KDimensionalHyperOctahedronConfig,
} from "../strategies/index.js";

export type MultiDimensionalConfigMap = {
  biquadratic: BiquadraticConfig;
  centeredHyperOctahedral: CenteredHyperOctahedralConfig;
  centeredPolytope: CenteredPolytopeConfig;
  fiveDimensionalMgonalPyramidal: FiveDimensionalMgonalPyramidalConfig;
  fourDimensionalMgonalPyramidal: FourDimensionalMgonalPyramidalConfig;
  hyperDodecahedral: HyperDodecahedralConfig;
  hyperIcosahedral: HyperIcosahedralConfig;
  hyperOctahedral: HyperOctahedralConfig;
  kDimensionalCenteredHyperCube: KDimensionalCenteredHyperCubeConfig;
  kDimensionalHyperCube: KDimensionalHyperCubeConfig;
  kDimensionalHyperTetrahedron: KDimensionalHyperTetrahedronConfig;
  nexus: NexusConfig;
  pentatope: PentatopeConfig;
  polyOctahedral: PolyOctahedralConfig;
  sixDimensionalMgonalPyramidal: SixDimensionalMgonalPyramidalConfig;
  centeredBiquadratic: CenteredBiquadraticConfig;
  kDimensionalMgonalPyramidal: KDimensionalMgonalPyramidalConfig;
  kDimensionalHyperOctahedron: KDimensionalHyperOctahedronConfig;
};

export type MultiDimensionalMappedTypeStrategy = MappedTypeStrategy<MultiDimensionalConfigMap>;

export const multiDimensionalMapStrategy: MultiDimensionalMappedTypeStrategy = {
  biquadratic: new BiquadraticGenerator(),
  centeredHyperOctahedral: new CenteredHyperOctahedralGenerator(),
  centeredPolytope: new CenteredPolytopeGenerator(),
  fiveDimensionalMgonalPyramidal: new FiveDimensionalMgonalPyramidalGenerator(),
  fourDimensionalMgonalPyramidal: new FourDimensionalMgonalPyramidalGenerator(),
  hyperDodecahedral: new HyperDodecahedralGenerator(),
  hyperIcosahedral: new HyperIcosahedralGenerator(),
  hyperOctahedral: new HyperOctahedralGenerator(),
  kDimensionalCenteredHyperCube: new KDimensionalCenteredHyperCubeGenerator(),
  kDimensionalHyperCube: new KDimensionalHyperCubeGenerator(),
  kDimensionalHyperTetrahedron: new KDimensionalHyperTetrahedronGenerator(),
  nexus: new NexusGenerator(),
  pentatope: new PentatopeGenerator(),
  polyOctahedral: new PolyOctahedralGenerator(),
  sixDimensionalMgonalPyramidal: new SixDimensionalMgonalPyramidalGenerator(),
  centeredBiquadratic: new CenteredBiquadraticGenerator(),
  kDimensionalMgonalPyramidal: new KDimensionalMgonalPyramidalGenerator(),
  kDimensionalHyperOctahedron: new KDimensionalHyperOctahedronGenerator(),
};
