import type { INumberGeneratorStrategy } from "../interfaces/INumberGeneratorStrategy.js";

export type MappedTypeStrategy<TDimensionConfigMap> = {
  [Key in keyof TDimensionConfigMap]: INumberGeneratorStrategy<TDimensionConfigMap[Key]>;
};
