import type { MappedTypeStrategy } from "../../core/mapped-types/MappedTypeStrategy.js";

import {
  CenteredDodecahedronGenerator,
  CenteredIcosahedronGenerator,
  CenteredMgonalPyramidalGenerator,
  CenteredMgonalPyramidGenerator,
  CenteredOctahedronGenerator,
  CenteredTruncatedCubeGenerator,
  CenteredTruncatedOctahedronGenerator,
  CenteredTruncatedTetrahedronGenerator,
  CubicGenerator,
  DodecahedralGenerator,
  IcosahedralGenerator,
  MgonalPrismGenerator,
  OctahedralGenerator,
  PyramidalGenerator,
  StellaOctangulaGenerator,
  TetrahedralGenerator,
  TruncatedCubicGenerator,
  TruncatedOctahedralGenerator,
  TruncatedTetrahedralGenerator,
  type CenteredDodecahedronConfig,
  type CenteredIcosahedronConfig,
  type CenteredMgonalPyramidalConfig,
  type CenteredMgonalPyramidConfig,
  type CenteredOctahedronConfig,
  type CenteredTruncatedCubeConfig,
  type CenteredTruncatedOctahedronConfig,
  type CubicConfig,
  type DodecahedralConfig,
  type IcosahedralConfig,
  type MgonalPrismConfig,
  type OctahedralConfig,
  type PyramidalConfig,
  type StellaOctangulaConfig,
  type TetrahedralConfig,
  type TruncatedCubicConfig,
  type TruncatedOctahedralConfig,
  type TruncatedTetrahedralConfig,
} from "../strategies/index.js";

export type SpaceConfigMap = {
  pyramidal: PyramidalConfig;
  mgonalPrism: MgonalPrismConfig;
  centeredMgonalPyramidal: CenteredMgonalPyramidalConfig;
  centeredMgonalPyramid: CenteredMgonalPyramidConfig;
  centeredTruncatedCube: CenteredTruncatedCubeConfig;
  centeredTruncatedTetrahedron: CenteredTruncatedOctahedronConfig;
  centeredTruncatedOctahedron: CenteredTruncatedOctahedronConfig;
  cubic: CubicConfig;
  tetrahedral: TetrahedralConfig;
  octahedral: OctahedralConfig;
  dodecahedral: DodecahedralConfig;
  icosahedral: IcosahedralConfig;
  stellaOctangula: StellaOctangulaConfig;
  truncatedCubic: TruncatedCubicConfig;
  truncatedTetrahedral: TruncatedTetrahedralConfig;
  truncatedOctahedral: TruncatedOctahedralConfig;
  centeredDodecahedron: CenteredDodecahedronConfig;
  centeredIcosahedron: CenteredIcosahedronConfig;
  centeredOctahedron: CenteredOctahedronConfig;
};

export type SpaceMappedTypeStrategy = MappedTypeStrategy<SpaceConfigMap>;

export const spaceMapStrategy: SpaceMappedTypeStrategy = {
  pyramidal: new PyramidalGenerator(),
  mgonalPrism: new MgonalPrismGenerator(),
  centeredMgonalPyramidal: new CenteredMgonalPyramidalGenerator(),
  centeredMgonalPyramid: new CenteredMgonalPyramidGenerator(),
  centeredTruncatedCube: new CenteredTruncatedCubeGenerator(),
  centeredTruncatedTetrahedron: new CenteredTruncatedTetrahedronGenerator(),
  centeredTruncatedOctahedron: new CenteredTruncatedOctahedronGenerator(),
  cubic: new CubicGenerator(),
  tetrahedral: new TetrahedralGenerator(),
  octahedral: new OctahedralGenerator(),
  dodecahedral: new DodecahedralGenerator(),
  icosahedral: new IcosahedralGenerator(),
  stellaOctangula: new StellaOctangulaGenerator(),
  truncatedCubic: new TruncatedCubicGenerator(),
  truncatedTetrahedral: new TruncatedTetrahedralGenerator(),
  truncatedOctahedral: new TruncatedOctahedralGenerator(),
  centeredDodecahedron: new CenteredDodecahedronGenerator(),
  centeredIcosahedron: new CenteredIcosahedronGenerator(),
  centeredOctahedron: new CenteredOctahedronGenerator(),
};
