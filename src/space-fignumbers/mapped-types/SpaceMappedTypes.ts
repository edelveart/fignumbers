import type { MappedTypeStrategy } from "../../core/mapped-types/MappedTypeStrategy.js";

import { PyramidalGenerator, type PyramidalConfig } from "../strategies/PyramidalGenerator.js";

export type SpaceConfigMap = {
  pyramidal: PyramidalConfig;
};

export type SpaceMappedTypeStrategy = MappedTypeStrategy<SpaceConfigMap>;

export const spaceMapStrategy: SpaceMappedTypeStrategy = {
  pyramidal: new PyramidalGenerator(),
};
