import type { MappedTypeStrategy } from "../../core/mapped-types/MappedTypeStrategy.js";

import {
  AztecDiamondGenerator,
  CenteredPolygonalGenerator,
  CrossGenerator,
  GnomicGenerator,
  ImpoliteGenerator,
  PoliteGenerator,
  PolygonalGenerator,
  PolygramGenerator,
  PronicGenerator,
  TruncatedCenteredPolygonalGenerator,
  type AztecDiamondConfig,
  type CenteredPolygonalConfig,
  type CrossConfig,
  type GnomicConfig,
  type ImpoliteConfig,
  type PoliteConfig,
  type PolygonalConfig,
  type PolygramConfig,
  type PronicConfig,
  type TruncatedCenteredPolygonalConfig,
} from "../strategies/index.js";

export type PlaneConfigMap = {
  polygonal: PolygonalConfig;
  pronic: PronicConfig;
  polygram: PolygramConfig;
  polite: PoliteConfig;
  impolite: ImpoliteConfig;
  aztecDiamond: AztecDiamondConfig;
  gnomic: GnomicConfig;
  cross: CrossConfig;
  centeredPolygonal: CenteredPolygonalConfig;
  truncatedCenteredPolygonal: TruncatedCenteredPolygonalConfig;
};

export type PlaneMappedTypeStrategy = MappedTypeStrategy<PlaneConfigMap>;

export const planeMapStrategy: PlaneMappedTypeStrategy = {
  polygonal: new PolygonalGenerator(),
  pronic: new PronicGenerator(),
  polite: new PoliteGenerator(),
  impolite: new ImpoliteGenerator(),
  aztecDiamond: new AztecDiamondGenerator(),
  gnomic: new GnomicGenerator(),
  cross: new CrossGenerator(),
  polygram: new PolygramGenerator(),
  centeredPolygonal: new CenteredPolygonalGenerator(),
  truncatedCenteredPolygonal: new TruncatedCenteredPolygonalGenerator(),
};
