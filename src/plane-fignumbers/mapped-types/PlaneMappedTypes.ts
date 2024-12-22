import type { MappedTypeConfig } from "../../core/mapped-types/MappedTypeConfig.js";
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
} from "../strategies/index.js";

export const PLANE_MAP_STRATEGY = {
  polygonal: new PolygonalGenerator(),
  centeredPolygonal: new CenteredPolygonalGenerator(),
  truncatedCenteredPolygonal: new TruncatedCenteredPolygonalGenerator(),
  pronic: new PronicGenerator(),
  polite: new PoliteGenerator(),
  impolite: new ImpoliteGenerator(),
  aztecDiamond: new AztecDiamondGenerator(),
  gnomic: new GnomicGenerator(),
  cross: new CrossGenerator(),
  polygram: new PolygramGenerator(),
} as const;

export type PlaneConfigMap = MappedTypeConfig<typeof PLANE_MAP_STRATEGY>;
